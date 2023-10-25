import { Reservation } from "@/domain/entities/reservation";
import React from "react";
import Invoice from ".";

type Props = {
  reservation: Reservation; // like this
};

export class ComponentToPrint extends React.PureComponent<Props> {
  render() {
    const { reservation } = this.props;
    return <Invoice reservation={reservation} />;
  }
}

export const FunctionalComponentToPrint = React.forwardRef<
  ComponentToPrint,
  Props
>((props, ref) => {
  return <ComponentToPrint ref={ref} reservation={props.reservation} />;
});
