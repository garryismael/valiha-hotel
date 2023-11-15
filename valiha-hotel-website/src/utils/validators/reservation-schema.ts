import * as Yup from "yup";

export const reservationSchema = (
  startDate: Date,
  endDate: Date
) =>
  Yup.object().shape({
    checkIn: Yup.date().required(),
    checkOut: Yup.date().required(),
    parking: Yup.boolean().required("form_validation.required"),
    pax: Yup.number().min(1, "form_validation.number.min").required(),
    client: Yup.object().shape({
      firstName: Yup.string()
        .min(2, "form_validation.reservation.firstName.min")
        .required("form_validation.reservation.firstName.required"),
      lastName: Yup.string()
        .min(2, "form_validation.reservation.lastName.min")
        .required("form_validation.reservation.lastName.required"),
      email: Yup.string()
        .email("form_validation.reservation.email.invalid")
        .required("form_validation.reservation.email.required"),
      phoneNumber: Yup.string().required(
        "form_validation.reservation.phoneNumber.required"
      ),
    }),
    breakfasts: Yup.object().shape({
      checked: Yup.boolean().required(
        "form_validation.reservation.breakfast.check.required"
      ),
      data: Yup.array().of(
        Yup.object().shape({
          date: Yup.date()
            .min(
              startDate,
              "form_validation.reservation.breakfast.date.refStartDate"
            )
            .max(
              endDate,
              "form_validation.reservation.breakfast.date.refEndDate"
            )
            .required("form_validation.reservation.breakfast.date.required"),
        })
      ),
    }),
    shuttles: Yup.object().shape({
      checked: Yup.boolean().required(
        "form_validation.reservation.navette.check.required"
      ),
      data: Yup.array().of(
        Yup.object().shape({
          flightName: Yup.string().required(
            "form_validation.reservation.navette.name.required"
          ),
          flightNumber: Yup.string().required(
            "form_validation.reservation.navette.flightNumber.required"
          ),
          destination: Yup.string().required(
            "form_validation.reservation.navette.direction.required"
          ),
          selection: Yup.string().required(
            "form_validation.reservation.navette.selection.required"
          ),
          date: Yup.date()
            .min(
              startDate,
              "form_validation.reservation.navette.dateArrival.refStartDate"
            )
            .max(
              endDate,
              "form_validation.reservation.navette.dateArrival.refEndDate"
            )
            .required(
              "form_validation.reservation.navette.dateArrival.required"
            ),
        })
      ),
    }),
  });
