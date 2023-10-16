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
    console.log(session?.user.access_token);
    if (session && session?.user.access_token) {
      config.headers["Authorization"] = `Bearer ${session.user.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response } = error;
    const originalRequest = error.config;

    if (!response || response.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (!isServer) {
      await signIn();
    }
  }
);

export default http;
