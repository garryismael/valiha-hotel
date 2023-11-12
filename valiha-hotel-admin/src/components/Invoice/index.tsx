import { Reservation } from "@/domain/entities/reservation";
import React from "react";
import InvoiceTemplate from "./InvoiceTemplate";

type Props = {
  reservation: Reservation;
};

const Invoice = (props: Props) => {
  return <InvoiceTemplate reservation={props.reservation} />;
};

export default Invoice;
