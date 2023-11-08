"use client";

import { Reservation } from "@/domain/entities/reservation";
import ReservationActions from "./reservation-action";
import { getPaymentState } from "@/lib/utils/payment";
import { Chip } from "@nextui-org/react";
import { getDays } from "@/lib/utils/date";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { getReservationState } from "@/lib/utils/reservation";
import { MdAdd, MdOpenInNew } from "react-icons/md";
import { If, Then, Else } from "react-if";

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
    case "shuttles":
      const shuttles = reservation.shuttles;
      return (
        <If condition={shuttles.length > 0}>
          <Then>
            <Chip
              color="primary"
              variant="bordered"
              endContent={<MdOpenInNew size={18} />}
            >
              {shuttles.length}
            </Chip>
          </Then>
          <Else>
            <Chip
              color="primary"
              variant="bordered"
              endContent={<MdAdd size={18} />}
            >
              aucun
            </Chip>
          </Else>
        </If>
      );
    case "breakfasts":
      const breakfasts = reservation.breakfasts;
      return (
        <If condition={breakfasts.length > 0}>
          <Then>
            <Chip
              color="primary"
              variant="bordered"
              endContent={<MdOpenInNew size={18} />}
            >
              {breakfasts.length}
            </Chip>
          </Then>
          <Else>
            <Chip
              color="primary"
              variant="bordered"
              endContent={<MdAdd size={18} />}
            >
              aucun
            </Chip>
          </Else>
        </If>
      );
    case "actions":
      return <ReservationActions reservation={reservation} />;
    default:
      // @ts-ignore
      const cellValue = reservation[columnKey];
      return cellValue;
  }
};
