"use client";

import { Reservation } from "@/domain/entities/reservation";
import ReservationActions from "./reservation-action";
import { getPaymentState } from "@/lib/utils/payment";
import { Chip } from "@nextui-org/react";
import { getDays } from "@/lib/utils/date";

interface Props {
  reservation: Reservation;
  columnKey: string | React.Key;
}

export const ReservationRenderCell = ({ reservation, columnKey }: Props) => {
  switch (columnKey) {
    case "client":
      return (
        <div className="inline-flex flex-col items-start">
          <span className="text-small text-inherit">
            {reservation.client.firstName} {reservation.client.lastName}
          </span>
          <span className="text-tiny text-default-500">
            {reservation.client.phoneNumber}
          </span>
        </div>
      );
    case "date":
      return (
        <div className="inline-flex flex-col items-start">
          <span className="text-small text-inherit">
            {reservation.checkIn}-{reservation.checkOut}
          </span>
          <span className="text-tiny text-default-500">
            {getDays(reservation.checkIn, reservation.checkOut)} jours
          </span>
        </div>
      );
    case "payment":
      return (
        <div className="inline-flex flex-col items-start gap-2">
          <span className="text-small text-inherit text-center">
            {reservation.payment.discount} %
          </span>
          <Chip
            className="capitalize"
            color={getPaymentState(reservation.payment.state).color}
            size="sm"
            variant="flat"
          >
            {getPaymentState(reservation.payment.state).value}
          </Chip>
        </div>
      );
    case "actions":
      return <ReservationActions reservation={reservation} />;
    default:
      // @ts-ignore
      const cellValue = reservation[columnKey];
      return cellValue;
  }
};
