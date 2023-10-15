import { DATE_FORMAT } from "@/domain/entities";
import { useFormik } from "formik";
import moment from "moment";
import { useRouter } from "next/router";

export interface SearchRoomsSchema {
  checkIn: Date;
  checkOut: Date;
}

export const useSearchRoom = () => {
  const router = useRouter();
  const formik = useFormik<SearchRoomsSchema>({
    initialValues: {
      checkIn: new Date(),
      checkOut: new Date(),
    },
    onSubmit(values: SearchRoomsSchema) {
      router.push({
        pathname: "/rooms/available",
        query: {
          checkIn: moment(values.checkIn).format(DATE_FORMAT),
          checkOut: moment(values.checkOut).format(DATE_FORMAT),
        },
      });
    },
  });

  return formik;
};
