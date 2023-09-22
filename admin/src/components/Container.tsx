"use client";

import { Layout } from "@/components/Layout";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import NextAuthProvider from "@/components/Provider";
import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthProvider>
      <NextThemesProvider defaultTheme="system" attribute="class">
        <NextUIProvider>
          <Layout>{children}</Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </NextAuthProvider>
  );
}
