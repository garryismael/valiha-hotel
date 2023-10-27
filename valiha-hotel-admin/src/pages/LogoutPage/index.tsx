"use client";

import React from "react";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  const handleLogout = async () => {
    await signOut({
      callbackUrl: '/',
      redirect: true,
    });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-cyan-600 px-6 py-2 border-none hover:bg-cyan-900"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
}
