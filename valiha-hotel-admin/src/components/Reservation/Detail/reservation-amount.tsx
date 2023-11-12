import { Reservation } from "@/domain/entities/reservation";
import { getReservationPrice } from "@/lib/utils/reservation";
import React from "react";

const ReservationTotalAmount = ({
  reservation,
}: {
  reservation: Reservation;
}) => {
  return (
    <h1>
      <span className="text-lg font-semibold">Total: </span>
      <span className="text-2xl font-bold">
        {getReservationPrice(reservation)} MGA
      </span>
    </h1>
  );
};

export default ReservationTotalAmount;
