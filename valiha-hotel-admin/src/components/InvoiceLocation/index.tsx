"use client";

import { Location } from "@/domain/entities/location";
import { Transaction } from "@/domain/entities/transaction";
import usePrint from "@/hooks/usePrint";
import { Button } from "@nextui-org/react";
import { FaPrint } from "react-icons/fa6";
import { FunctionalLocationComponentToPrint } from "./ComponentToPrint";

type Props = {
  location: Location;
  transaction: Transaction;
};

const InvoiceLocation = (props: Props) => {
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
      <FunctionalLocationComponentToPrint
        location={props.location}
        transaction={props.transaction}
        ref={componentRef}
      />
    </main>
  );
};

export default InvoiceLocation;
