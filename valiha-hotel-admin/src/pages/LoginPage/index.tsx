"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-cyan-600 px-6 py-2 border-none hover:bg-cyan-900"
        onClick={() =>
          signIn("keycloak", {
            callbackUrl: '/',
            redirect: false,
          })
        }
      >
        Log In
      </button>
    </div>
  );
}
