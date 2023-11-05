"use client";
import { TableWrapper } from "@/components/Table/table";
import { accountBreadcrumbs } from "@/constants/account";
import { User } from "@/domain/entities/user";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { InfoIcon } from "@/icons/accounts/info-icon";
import { TrashIcon } from "@/icons/accounts/trash-icon";
import { SettingsIcon } from "@/icons/sidebar/settings-icon";
import { Input } from "@nextui-org/react";
import Breadcrumbs from "../BreadCrumbs";
import { AddUser } from "./add-user";

export const Accounts = ({ users }: { users: User[] }) => {
  return (
    <div className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={accountBreadcrumbs} />

      <h3 className="title">All Accounts</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search users"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddUser />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <TableWrapper users={users} />
      </div>
    </div>
  );
};
