import {
  ClientRequestDto,
  ContactRequestDto,
  CreateContactInteractor,
  CreateContactUseCase,
} from "@/domain/use-cases/contact";
import container from "@/infrastructure/config/container.config";
import { contactValidationSchema } from "@/utils/validators/contact-schema";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";

export type ContactForm = {
  client: ClientRequestDto;
  subject: string;
  message: string;
};

const useContactForm = () => {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      contactUseCase.execute(values);
      setLoading(false);
      toast.success("Réservation ajoutée avec succès!", {
        position: "bottom-center",
        toastId: "create-breakfast",
      });
    },
  });

  return { loading, formik };
};

export default useContactForm;
