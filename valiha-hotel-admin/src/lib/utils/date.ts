import { DATE_FORMAT } from "@/constants/date";
import moment from "moment";

export const getDays = (checkIn: string, checkOut: string) => {
  return moment(checkOut, DATE_FORMAT).diff(
    moment(checkIn, DATE_FORMAT),
    "days"
  );
};

export const dateToString = (date: Date) => {
  return moment(date).format(DATE_FORMAT);
};

export const toDate = (date: string, format = DATE_FORMAT) => {
  return moment(date, format).startOf("days").toDate();
};
