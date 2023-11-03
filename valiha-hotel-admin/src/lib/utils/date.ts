import { DATE_FORMAT } from "@/constants/date";
import moment from "moment";

export const getDays = (checkIn: string, checkOut: string) => {
  return moment(checkOut, DATE_FORMAT).diff(
    moment(checkIn, DATE_FORMAT),
    "days"
  );
};
