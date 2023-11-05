import {
    CreateUserInteractor,
    CreateUserUseCase,
    UserRequest,
} from "@/domain/use-cases/user";
import container from "@/infrastructures/config/container.config";
import { addUser } from "@/lib/store/slices/user-slide";
import { useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";
import { useAppDispatch } from "./useStore";

export const useUserForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const createUser = container.resolve<CreateUserUseCase>(CreateUserInteractor);
  const dispatch = useAppDispatch();

  const formik = useFormik<UserRequest>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      image: null,
    },
    async onSubmit(values: UserRequest) {
      onOpenChange();
      const user = await createUser.execute(values);
      dispatch(addUser(user));
    },
  });

  return { formik, isOpen, onOpen, onOpenChange };
};
