'use client';
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Topbar(): React.JSX.Element {
  return <nav className="topbar">
      <Link href='/' className="flex items-center flex-1 gap-4">
        <Image src='/logo.png' width={100} height={50} alt="Logo" />
      </Link>
  </nav>
}
