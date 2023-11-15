import { ReservationForm } from "@/hooks/reservation";
import { getDays } from "./date";

const breakfast = parseInt(process.env.NEXT_PUBLIC_BREAKFAST_PRICE as string);
const shuttle = parseInt(process.env.NEXT_PUBLIC_SHUTTLE_PRICE as string);

export const getBreakfastPrice = (form: ReservationForm) => {
  return form.breakfasts.data.length * breakfast * form.pax;
};

export const getShuttlePrice = (form: ReservationForm) => {
  return form.shuttles.data.length * shuttle;
};

export const getTotalPrice = (form: ReservationForm) => {
  const price = form.rooms.reduce((prev, acc) => acc.price + prev, 0);
  return (
    price * getDays(form.checkIn, form.checkOut) +
    getBreakfastPrice(form) +
    getShuttlePrice(form)
  );
};
