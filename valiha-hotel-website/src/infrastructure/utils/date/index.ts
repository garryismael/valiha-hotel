import { DATE_FORMAT } from "@/domain/entities";
import moment from "moment";

export const dateToString = (date: Date, format = DATE_FORMAT) => {
  return moment(date).format(format);
};

export const stringToDate = (date: string, format = DATE_FORMAT) => {
  return moment(date, format).toDate();
};
