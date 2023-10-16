import { ReservationRequestDto } from "@/domain/use-cases/reservation";
import { useFormik } from "formik";
import { useAppSelector } from "./store";
import { useState } from "react";

export const useBookingForm = () => {
  const booking = useAppSelector((state) => state.booking);
  const [useBreakfast, setUseBreakfast] = useState<boolean>(false);
  const [useShuttle, setUseShuttle] = useState<boolean>(false);
  const formik = useFormik<ReservationRequestDto>({
    initialValues: booking,
    onSubmit(values) {
      console.log(values);
    },
  });

  const handleCheckBreakfast = () => {
    setUseBreakfast(!useBreakfast);

    if (formik.values.breakfasts.length === 0) {
      formik.setFieldValue("breakfasts", [
        {
          date: booking.checkIn,
        },
      ]);
    }
  };

  const handleCheckShuttle = () => {
    setUseShuttle(!useShuttle);

    if (formik.values.shuttles.length === 0) {
      formik.setFieldValue("shuttles", [
        {
          date: booking.checkIn,
          destination: "",
          flightName: "",
          flightNumber: "",
        },
      ]);
    }
  };

  return {
    formik,
    useBreakfast,
    useShuttle,
    handleCheckBreakfast,
    handleCheckShuttle,
  };
};
