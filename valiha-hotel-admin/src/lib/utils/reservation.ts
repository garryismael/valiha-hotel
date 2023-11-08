import { reservationState } from "@/constants/reservation";

export const getReservationState = (key: string) => {
  return reservationState[key as keyof typeof reservationState];
};
