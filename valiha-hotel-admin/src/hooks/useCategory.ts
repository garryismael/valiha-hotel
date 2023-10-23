import container from "@/infrastructures/config/container.config";
import {
  CategoryRequest,
  CreateCategoryInteractor,
  CreateCategoryUseCase,
} from "@/domain/use-cases/category";
import { useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";

export const useCategoryForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const createCategory = container.resolve<CreateCategoryUseCase>(
    CreateCategoryInteractor
  );
  const formik = useFormik<CategoryRequest>({
    initialValues: {
      title: "",
      type: "",
      pax: 1,
      image: null,
      bigBed: 0,
      smallBed: 0,
    },
    onSubmit: async (values) => {
        console.log("submited");
      onOpenChange();
      await createCategory.execute(values);
    },
  });

  return { formik, isOpen, onOpen, onOpenChange };
};
