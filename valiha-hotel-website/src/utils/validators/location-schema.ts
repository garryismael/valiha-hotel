import * as Yup from "yup";
import moment from "moment";

const today = moment().startOf("days").toDate();

export const locationValidationSchema = Yup.object().shape({
  client: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "form_validation.firstName.min")
      .required("form_validation.required"),
    lastName: Yup.string()
      .min(2, "form_validation.lastName.min")
      .required("form_validation.required"),
    email: Yup.string()
      .email("form_validation.email.invalid")
      .required("form_validation.required"),
    phoneNumber: Yup.string().required("form_validation.phoneNumber.required"),
  }),
  start: Yup.date()
    .min(today, "form_validation.date.min")
    .required("form_validation.required"),
  end: Yup.date()
    .test(
      "is-greater-than-start",
      "form_validation.endDate.graterThanStart",
      function (end) {
        const { start } = this.parent;

        if (!start || !end) return false;
        const daysDifference =
          moment(end)
            .startOf("day")
            .diff(moment(start).startOf("day"), "days") + 1;
        return daysDifference >= 5;
      }
    )
    .required("form_validation.required"),
  destination: Yup.string().required("form_validation.required"),
  reason: Yup.string().required("form_validation.required"),
});
