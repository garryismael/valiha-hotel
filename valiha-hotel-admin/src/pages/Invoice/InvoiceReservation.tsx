"use client";

import { FunctionalComponentToPrint } from "@/components/Invoice/ComponentToPrint";
import { Reservation } from "@/domain/entities/reservation";
import { Transaction } from "@/domain/entities/transaction";
import usePrint from "@/hooks/usePrint";
import { Button } from "@nextui-org/react";
import { FaPrint } from "react-icons/fa6";

type Props = {
  reservation: Reservation;
  transaction: Transaction;
};

const InvoiceReservation = ({ reservation, transaction }: Props) => {
  const [componentRef, loading, handlePrint] = usePrint();
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Button
        isLoading={loading}
        variant="solid"
        color="primary"
        endContent={<FaPrint />}
        onClick={handlePrint}
        className="w-fit self-end"
      >
        Imprimer
      </Button>
      <FunctionalComponentToPrint
        reservation={reservation}
        transaction={transaction}
        ref={componentRef}
      />
    </main>
  );
};

export default InvoiceReservation;
