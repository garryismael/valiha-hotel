import {
  setCheckIn,
  setCheckOut,
} from "@/infrastructure/store/slices/booking-slice";
import { dateToString } from "@/infrastructure/utils/date";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useAppDispatch } from "./store";

export interface SearchRoomsSchema {
  checkIn: Date;
  checkOut: Date;
}

export const useSearchRoom = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const formik = useFormik<SearchRoomsSchema>({
    initialValues: {
      checkIn: new Date(),
      checkOut: new Date(),
    },
    onSubmit(values: SearchRoomsSchema) {
      dispatch(setCheckIn(dateToString(values.checkIn)));
      dispatch(setCheckOut(dateToString(values.checkOut)));
      router.push({
        pathname: "/rooms/available",
        query: {
          checkIn: dateToString(values.checkIn),
          checkOut: dateToString(values.checkOut),
        },
      });
    },
  });

  return formik;
};
