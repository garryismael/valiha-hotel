"use client";

import { Reservation } from "@/domain/entities/reservation";
import React from "react";
import Invoice from ".";
import { Transaction } from "@/domain/entities/transaction";

type Props = {
  reservation: Reservation;
  transaction: Transaction;
};

export class ComponentToPrint extends React.PureComponent<Props> {
  render() {
    const { reservation, transaction } = this.props;
    return <Invoice reservation={reservation} transaction={transaction} />;
  }
}

export const FunctionalComponentToPrint = React.forwardRef<
  ComponentToPrint,
  Props
>((props, ref) => {
  return (
    <ComponentToPrint
      ref={ref}
      reservation={props.reservation}
      transaction={props.transaction}
    />
  );
});
