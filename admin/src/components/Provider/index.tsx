"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

function NextAuthProvider(props: Props) {
  return <SessionProvider>{props.children}</SessionProvider>;
}

export default NextAuthProvider;
