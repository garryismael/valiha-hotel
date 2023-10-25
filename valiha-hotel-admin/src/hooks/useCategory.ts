import { Category } from "@/domain/entities/category";
import {
  CategoryRequest,
  CreateCategoryInteractor,
  CreateCategoryUseCase,
  GetCategoriesInteractor,
  GetCategoriesUseCase,
} from "@/domain/use-cases/category";
import container from "@/infrastructures/config/container.config";
import { addCategory } from "@/lib/store/slices/category-slice";
import { useDisclosure } from "@nextui-org/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useCategoryList = () => {
  const [data, setData] = useState<Array<Category>>([]);
  let { categories } = useAppSelector((state) => state.category);

  useEffect(() => {
    const fetchData = async () => {
      const getCategories = container.resolve<GetCategoriesUseCase>(
        GetCategoriesInteractor
      );
      setData(await getCategories.execute());
    };
    if (categories.length <= 0) {
      fetchData();
    } else {
      setData(categories);
    }
  }, []);

  return data;
};

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
