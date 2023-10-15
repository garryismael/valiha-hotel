import { ReservationRequestDto } from "@/domain/use-cases/reservation";
import { useFormik } from "formik";
import { useRouter } from "next/router";

export const useBookingForm = () => {
  const router = useRouter();
  const formik = useFormik<ReservationRequestDto>({
    initialValues: {
      roomIds: router.query.ids as string[],
      checkIn: router.query.checkIn as string,
      checkOut: router.query.checkOut as string,
      client: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      breakfasts: [],
      shuttles: [],
      parking: false,
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  return {
    formik,
  };
};
