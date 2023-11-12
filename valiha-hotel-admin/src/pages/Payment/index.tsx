"use client";

import Breadcrumbs from "@/components/BreadCrumbs";
import PaymentTable from "@/components/Payment/payment-table";
import { paymentBreadcrumbs } from "@/constants/payment";
import { Payment } from "@/domain/entities/payment";
import { Input } from "@nextui-org/react";

type Props = {
  payments: Payment[];
};

const PaymentPage = ({ payments }: Props) => {
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={paymentBreadcrumbs} />
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            isClearable
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Recherche des paiements"
          />
        </div>
      </div>
      <div className=" w-full flex flex-col gap-4">
        <PaymentTable payments={payments} />
      </div>
    </main>
  );
};

export default PaymentPage;
