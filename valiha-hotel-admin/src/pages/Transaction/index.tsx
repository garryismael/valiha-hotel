"use client";

import Breadcrumbs from "@/components/BreadCrumbs";
import TransactionTable from "@/components/Transaction/transaction-table";
import {
  transactionBreadcrumbs, transactionData
} from "@/constants/transactions";
import { Input } from "@nextui-org/react";

const TransactionPage = () => {
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={transactionBreadcrumbs} />
      <h3 className="title">Liste de Reservations</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            isClearable
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Recherche des transactions"
          />
        </div>
      </div>
      <TransactionTable transactions={transactionData}/>
    </main>
  );
};

export default TransactionPage;
