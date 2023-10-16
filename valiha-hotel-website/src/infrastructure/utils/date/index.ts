import { DATE_FORMAT } from "@/domain/entities";
import moment from "moment";

export const setFormat = (date: Date, format = DATE_FORMAT) => {
  return moment(date).format(format);
};
