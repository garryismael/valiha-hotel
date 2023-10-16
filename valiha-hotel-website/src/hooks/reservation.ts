import { ReservationRequestDto } from "@/domain/use-cases/reservation";
import { useFormik } from "formik";
import { useAppSelector } from "./store";

export const useBookingForm = () => {
  const booking = useAppSelector((state) => state.booking);
  const formik = useFormik<ReservationRequestDto>({
    initialValues: booking,
    onSubmit(values) {
      console.log(values);
    },
  });

  return {
    formik,
  };
};
