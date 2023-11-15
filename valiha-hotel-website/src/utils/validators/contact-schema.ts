import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
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
  subject: Yup.string()
    .min(2, "form_validation.subject.min")
    .required("form_validation.required"),
  message: Yup.string()
    .min(4, "form_validation.message.min")
    .required("form_validation.required"),
});
