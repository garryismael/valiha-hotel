import axios from "axios";
import { Session, getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const isServer = typeof window === "undefined";

export const http = axios.create({
  baseURL,
});

http.interceptors.request.use(async (config) => {
  let session: Session | null;
  if (isServer) {
    session = await getServerSession();
  } else {
    session = await getSession();
  }
  if (session) {
    config.headers["Authorization"] = `Bearer ${session.access_token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(`error`, error);
  }
);
