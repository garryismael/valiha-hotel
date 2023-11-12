"use client";

import { Reservation } from "@/domain/entities/reservation";
import { getDays } from "@/lib/utils/date";
import { getPaymentState } from "@/lib/utils/payment";
import { getReservationState } from "@/lib/utils/reservation";
import { Chip } from "@nextui-org/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Else, If, Then } from "react-if";
import ReservationActions from "./reservation-action";
import ShuttleModalTable from "@/components/Shuttles/shuttle-modal-table";
import AddShuttle from "@/components/Shuttles/add-shuttle";
import BreakfastModalTable from "@/components/Breakfast/breakfast-modal-table";
import AddBreakfast from "@/components/Breakfast/add-breakfast";

interface Props {
  reservation: Reservation;
  columnKey: string | React.Key;
}

export const ReservationRenderCell = ({ reservation, columnKey }: Props) => {
  switch (columnKey) {
    case "client":
      return (
        <div className="inline-flex flex-col items-start">
          <span className="text-small">
            {reservation.client.firstName} {reservation.client.lastName}
          </span>
          <span className="text-tiny text-default-500">
            {reservation.client.email}
          </span>
          <span className="text-tiny text-default-500">
            {reservation.client.phoneNumber}
          </span>
        </div>
      );
    case "state":
      const reservationState = getReservationState(reservation.state);
      return (
        <Chip color={reservationState.color} size="sm" variant="flat">
          {reservationState.value}
        </Chip>
      );
    case "payment":
      const paymentState = getPaymentState(reservation.payment.state);
      return (
        <div className="inline-flex flex-col items-start gap-2">
          <Chip color={paymentState.color} size="sm" variant="flat">
            {paymentState.value}
          </Chip>
        </div>
      );

    case "discount":
      return (
        <div className="inline-flex flex-col items-start gap-2">
          <Chip color="primary" size="sm" variant="solid">
            {reservation.payment.discount} %
          </Chip>
        </div>
      );
    case "rooms":
      return (
        <div className="flex gap-2 flex-wrap">
          {reservation.rooms.map((room) => (
            <Chip key={room.id} color="primary" variant="flat" size="sm">
              {room.title}
            </Chip>
          ))}
        </div>
      );
    case "parking":
      return (
        <Chip
          variant="bordered"
          color={reservation.parking ? "success" : "danger"}
          startContent={
            reservation.parking ? (
              <FaCheckCircle size={14} className="text-success-500" />
            ) : (
              <FaTimesCircle size={14} />
            )
          }
        >
          {reservation.parking ? "oui" : "non"}
        </Chip>
      );
    case "date":
      return (
        <div className="inline-flex flex-col items-start min-w-[160px] w-[160px] max-w-[160px]">
          <span className="text-small text-inherit">
            {reservation.checkIn}-{reservation.checkOut}
          </span>
          <span className="text-tiny text-default-500">
            {getDays(reservation.checkIn, reservation.checkOut)} jours
          </span>
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
