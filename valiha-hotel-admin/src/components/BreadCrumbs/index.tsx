"use client";

import Link from "next/link";
import React from "react";
import { Else, If, Then } from "react-if";

export interface Breadcrumb {
  id: number;
  icon?: React.ReactNode;
  text: string;
  href?: string;
  spacer?: string | null;
}

type Props = {
  breadcrumbs: Array<Breadcrumb>;
};

const Breadcrumbs = (props: Props) => {
  return (
    <ul className="flex">
      {props.breadcrumbs.map(({ id, icon, text, href, spacer }) => (
        <If condition={icon && href && spacer} key={id}>
          <Then>
            <li className="flex gap-2">
              {icon}
              <Link href={href || "/"}>
                <span>{text}</span>
              </Link>
              <span> {spacer} </span>{" "}
            </li>
          </Then>
          <Else>
            <li className="flex gap-2">
              <span>{text}</span>
            </li>
          </Else>
        </If>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
