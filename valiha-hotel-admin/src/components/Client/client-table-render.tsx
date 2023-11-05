"use client";

import { Client } from "@/domain/entities/client";
import { ClientTableActions } from "./client-table-action";

interface Props {
  client: Client;
  columnKey: string | React.Key;
}

export const ClientTableRender = ({
  client,
  columnKey,
}: Props) => {
  // @ts-ignore
  const cellValue = client[columnKey];
  switch (columnKey) {
    case "actions":
      return <ClientTableActions client={client} />;
    default:
      return cellValue;
  }
};
