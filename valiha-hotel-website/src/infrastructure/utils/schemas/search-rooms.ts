import { SearchRoomsSchema } from "@/hooks/room";
import moment from "moment";
import * as Yup from "yup";

export const searchRoomsSchema = Yup.object<SearchRoomsSchema>().shape({
  checkIn: Yup.date()
    .required()
    .test(
      "is-start-of-day",
      "Check-in date must be at the start of the day",
      (value: Date) => {
        if (!value) return false;
        const startOfTheDay = moment().startOf("day");
        const checkIn = moment(value).startOf("day");
        return checkIn.isSame(startOfTheDay);
      }
    ),
  checkOut: Yup.date()
    .required()
    .test(
      "is-greater-or-equal",
      "Check-out date must be greater than or equal to Check-in date",
      function (checkOut: Date, context) {
        const { checkIn } = context as Yup.TestContext & SearchRoomsSchema;
        if (!checkIn || !checkOut) return false;
        const start = moment(checkIn).startOf("day");
        const end = moment(checkOut).startOf("day");
        return end.isSameOrAfter(start);
      }
    ),
});
