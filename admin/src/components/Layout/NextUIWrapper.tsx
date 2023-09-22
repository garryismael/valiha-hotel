"use client";

import React from "react";

type Prop = {
  children: React.ReactNode;
};

export default function NextUIWrapper(props: Prop) {
  return <>{props.children}</>;
}
