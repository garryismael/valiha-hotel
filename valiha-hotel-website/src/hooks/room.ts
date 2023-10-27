import { DATE_FORMAT } from "@/domain/entities";
import {
  setCheckIn,
  setCheckOut,
} from "@/infrastructure/store/slices/booking-slice";
import { useFormik } from "formik";
import moment from "moment";
import { useRouter } from "next/router";
import { useAppDispatch } from "./store";
import { setFormat } from "@/infrastructure/utils/date";

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
      dispatch(setCheckIn(values.checkIn));
      dispatch(setCheckOut(values.checkOut));
      router.push({
        pathname: "/rooms/available",
        query: {
          checkIn: setFormat(values.checkIn),
          checkOut: setFormat(values.checkOut)
        },
      });
    },
  });

  return formik;
};
