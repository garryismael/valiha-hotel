"use client";
import { getUserPicture } from "@/lib/utils/image";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

export const UserDropdown = () => {
  const { data: session } = useSession();

  const onAction = async (key: React.Key) => {
    if (key.valueOf() === "logout") {
      await signOut({
        callbackUrl: "/auth/signin",
        redirect: true,
      });
    }
  };
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar
            as="button"
            color="secondary"
            size="md"
            src={getUserPicture(session?.user.picture as string)}
          />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu aria-label="User menu actions" onAction={onAction}>
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Connecté en tant que</p>
          <p>{session?.user.email}</p>
        </DropdownItem>
        <DropdownItem key="logout" color="danger" className="text-danger ">
          Se déconnecter
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
