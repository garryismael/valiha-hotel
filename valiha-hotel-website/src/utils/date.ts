import { DATE_FORMAT } from "@/domain/entities";
import moment from "moment";

export const getDays = (checkIn: Date, checkOut: Date) => {
    return moment(checkOut, DATE_FORMAT).diff(
      moment(checkIn, DATE_FORMAT),
      "days"
    );
  };
  