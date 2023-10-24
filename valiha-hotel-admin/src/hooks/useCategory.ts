import container from "@/infrastructures/config/container.config";
import {
  CategoryRequest,
  CreateCategoryInteractor,
  CreateCategoryUseCase,
} from "@/domain/use-cases/category";
import { useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";
import { useAppDispatch } from "./useStore";
import { addCategory } from "@/lib/store/slices/category-slice";

export const useCategoryForm = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const createCategory = container.resolve<CreateCategoryUseCase>(
    CreateCategoryInteractor
  );
  const dispatch = useAppDispatch();
  const formik = useFormik<CategoryRequest>({
    initialValues: {
      title: "",
      type: "",
      pax: 1,
      image: null,
      bigBed: 1,
      smallBed: 0,
    },
    onSubmit: async (values) => {
      onOpenChange();
      const category = await createCategory.execute(values);
      dispatch(addCategory(category));
    },
  });

  return { formik, isOpen, onOpen, onOpenChange };
};
