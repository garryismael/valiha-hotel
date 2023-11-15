import {
  ClientRequestDto,
  ContactRequestDto,
  CreateContactInteractor,
  CreateContactUseCase,
} from "@/domain/use-cases/contact";
import container from "@/infrastructure/config/container.config";
import { contactValidationSchema } from "@/utils/validators/contact-schema";
import { useFormik } from "formik";

export type ContactForm = {
  client: ClientRequestDto;
  subject: string;
  message: string;
};

const useContactForm = () => {
  const contactUseCase = container.resolve<CreateContactUseCase>(
    CreateContactInteractor
  );
  const formik = useFormik<ContactRequestDto>({
    initialValues: {
      client: {
        email: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
      },
      subject: "",
      message: "",
    },
    validationSchema: contactValidationSchema,
    async onSubmit(values) {
      contactUseCase.execute(values);
    },
  });

  return formik;
};

export default useContactForm;
