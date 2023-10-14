"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

type Prop = {
  children: React.ReactNode;
};

export default function NextThemesProvider(props: Prop) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {props.children}
    </ThemeProvider>
  );
}
