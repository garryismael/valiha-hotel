import { Reservation } from "@/domain/entities/reservation";
import { useAppDispatch, useAppSelector } from "./useStore";
import { useEffect } from "react";
import { setReservations } from "@/lib/store/slices/reservation-slide";

export const useReservationList = (reservations: Reservation[]) => {
  const dispatch = useAppDispatch();
  const { reservations: data } = useAppSelector((state) => state.reservation);
  useEffect(() => {
    dispatch(setReservations(reservations));
  }, []);

  return data;
};
