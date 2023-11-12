import { reservationState } from "@/constants/reservation";
import { Reservation } from "@/domain/entities/reservation";

export const getReservationState = (key: string) => {
  return reservationState[key as keyof typeof reservationState];
};

export const getReservationPrice = (reservation: Reservation) => {
  const shuttlePrice = parseInt(
    process.env.NEXT_PUBLIC_SHUTTLE_PRICE as string
  );
  const breakfastPrice = parseInt(
    process.env.NEXT_PUBLIC_BREAKFAST_PRICE as string
  );

  const roomsPrice = reservation.rooms.reduce(
    (prev, curr) => curr.price + prev,
    0
  );

  const total =
    reservation.breakfasts.length * breakfastPrice * reservation.pax +
    roomsPrice +
    reservation.shuttles.length * shuttlePrice;
  const discount = reservation.payment.discount;

  return discount > 0 ? total - (total * discount) / 100 : total;
};
