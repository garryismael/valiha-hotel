import axios from "axios";
import { Session, getServerSession } from "next-auth";
import { getSession, signIn } from "next-auth/react";
import { authOptions } from "../auth";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const isServer = typeof window === "undefined";

const http = axios.create({
  baseURL,
});

export const httpClient = axios.create({
  baseURL,
});

http.interceptors.request.use(
  async (config) => {
    let session: Session | null;
    if (isServer) {
      session = await getServerSession(authOptions);
    } else {
      session = await getSession();
    }
    
    if (session && session?.user.access_token) {
      config.headers["Authorization"] = `Bearer ${session.user.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
