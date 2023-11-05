"use client";

import Breadcrumbs from "@/components/BreadCrumbs";
import ClientTable from "@/components/Client/client-table";
import { clientBreadcrumbs } from "@/constants/client";
import { Client } from "@/domain/entities/client";

const ClientPage = ({ clients }: { clients: Client[] }) => {
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={clientBreadcrumbs} />
      <h3 className="title">Les Clients</h3>
      <ClientTable clients={clients} />
    </main>
  );
};

export default ClientPage;
