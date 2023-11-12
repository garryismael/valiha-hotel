import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";

import KeycloakProvider from "next-auth/providers/keycloak";
const refreshURL = process.env.REFRESH_URL as string;
const client_id = process.env.KEYCLOAK_ID as string;
const grant_type = process.env.GRANT_TYPE_REFRESH_TOKEN as string;

async function refreshToken(token: JWT) {
  try {
    const url =
      refreshURL +
      new URLSearchParams({
        client_id,
        grant_type,
        refresh_token: token?.refresh_token || "",
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    if (!response.ok) {
      throw new Error("Cannot refresh Token");
    }

    const data = await response.json();

    return {
      ...token,
      access_token: data.access_token as string,
      refresh_token: data.access_token as string,
    };
  } catch {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID as string,
      clientSecret: process.env.KEYCLOAK_SECRET as string,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token;
        token.refresh_token = account.refresh_token;
        return token;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.access_token = token.access_token;
      session.user.refresh_token = token.refresh_token;
      session.user.picture = token.picture;
      session.user.phone_number = token.phone_number;
      return session;
    },
  },
};
