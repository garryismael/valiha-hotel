import { clientColumns } from "@/constants/client";
import { Client } from "@/domain/entities/client";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { InfoIcon } from "@/icons/accounts/info-icon";
import { TrashIcon } from "@/icons/accounts/trash-icon";
import { SettingsIcon } from "@/icons/sidebar/settings-icon";
import {
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { ClientTableRender } from "./client-table-render";

const ClientTable = ({ clients }: { clients: Client[] }) => {
  return (
    <>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Recherche des clients"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
      </div>
      <div className=" w-full flex flex-col gap-4">
        <Table aria-label="Client Table">
          <TableHeader columns={clientColumns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={clients}>
            {(client) => (
              <TableRow>
                {(columnKey) => (
                  <TableCell>
                    {ClientTableRender({
                      client,
                      columnKey,
                    })}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ClientTable;
