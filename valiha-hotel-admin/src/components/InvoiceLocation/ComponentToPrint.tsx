"use client";

import { Location } from "@/domain/entities/location";
import { Transaction } from "@/domain/entities/transaction";
import React from "react";
import InvoiceLocation from ".";

type Props = {
  location: Location;
  transaction: Transaction;
};

export class ComponentLocationToPrint extends React.PureComponent<Props> {
  render() {
    const { location, transaction } = this.props;
    return <InvoiceLocation location={location} transaction={transaction} />;
  }
}

export const FunctionalLocationComponentToPrint = React.forwardRef<
  ComponentLocationToPrint,
  Props
>((props, ref) => {
  return (
    <ComponentLocationToPrint
      ref={ref}
      location={props.location}
      transaction={props.transaction}
    />
  );
});
