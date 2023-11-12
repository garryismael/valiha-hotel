"use client";
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
import { DarkModeSwitch } from "./darkmodeswitch";

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
            src={session?.user.picture}
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
        <DropdownItem key="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
