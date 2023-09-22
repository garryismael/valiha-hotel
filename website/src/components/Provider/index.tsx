"use client";

import { NextUIProvider } from "@nextui-org/react";
import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Provider(props: Props) {
  return <NextUIProvider>{props.children}</NextUIProvider>;
}
