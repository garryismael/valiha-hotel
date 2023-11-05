"use client";

import Breadcrumbs from "@/components/BreadCrumbs";
import { TableWrapper } from "@/components/Table/table";
import { AddUser } from "@/components/User/add-user";
import { accountBreadcrumbs } from "@/constants/account";
import { User } from "@/domain/entities/user";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { ExportIcon } from "@/icons/accounts/export-icon";
import { InfoIcon } from "@/icons/accounts/info-icon";
import { TrashIcon } from "@/icons/accounts/trash-icon";
import { SettingsIcon } from "@/icons/sidebar/settings-icon";
import { Button, Input } from "@nextui-org/react";

const AdminPage = ({ users }: { users: User[] }) => {
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={accountBreadcrumbs} />

      <h3 className="title">Compte des administrateurs</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Recherche des administrateurs"
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
      <div className="max-w-[100rem] mx-auto w-full">
        <TableWrapper users={users} />
      </div>
    </main>
  );
};

export default AdminPage;
