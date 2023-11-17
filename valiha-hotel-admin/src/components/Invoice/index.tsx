import { Reservation } from "@/domain/entities/reservation";
import React from "react";
import InvoiceTemplate from "./InvoiceTemplate";
import { Transaction } from "@/domain/entities/transaction";

type Props = {
  reservation: Reservation;
  transaction: Transaction;
};

const Invoice = (props: Props) => {
  return (
    <InvoiceTemplate
      reservation={props.reservation}
      transaction={props.transaction}
    />
  );
};

export default Invoice;
