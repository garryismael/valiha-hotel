import { Category } from "@/domain/entities/category";
import {
  CategoryRequest,
  CreateCategoryInteractor,
  CreateCategoryUseCase,
  DeleteCategoryInteractor,
  DeleteCategoryUseCase,
  EditCategoryInteractor,
  EditCategoryUseCase,
  GetCategoriesInteractor,
  GetCategoriesUseCase,
} from "@/domain/use-cases/category";
import container from "@/infrastructures/config/container.config";
import {
  addCategory,
  deleteCategory,
  editCategory,
  setCategories,
} from "@/lib/store/slices/category-slice";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "reflect-metadata";
import useFormModal from "./useFormModal";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useApiCategory = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.category);
  useEffect(() => {
    const fetchData = async () => {
      const getCategories = container.resolve<GetCategoriesUseCase>(
        GetCategoriesInteractor
      );
      const data = await getCategories.execute();
      dispatch(setCategories(data));
    };
    fetchData();
  }, []);
  return categories;
};

export const useCategoryList = (categories: Category[]) => {
  const dispatch = useAppDispatch();
  const { categories: data } = useAppSelector((state) => state.category);
  useEffect(() => {
    dispatch(setCategories(categories));
  }, []);
  return data;
};

export const useCategoryForm = () => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();
  const createUseCase = container.resolve<CreateCategoryUseCase>(
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
      setLoading(true);
      const category = await createUseCase.execute(values);
      dispatch(addCategory(category));
      setLoading(false);
      handleClose();
      toast.success("Catégorie de chambre ajoutée avec succès!", {
        position: "bottom-right",
        toastId: "create-category",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};

export const useCategoryEditForm = (
  category: Category,
  onOpenChange: () => void
) => {
  const { loading, setLoading } = useFormModal();
  const editUseCase = container.resolve<EditCategoryUseCase>(
    EditCategoryInteractor
  );
  const dispatch = useAppDispatch();

  const formik = useFormik<CategoryRequest & { id: string }>({
    initialValues: {
      id: category.id,
      title: category.title,
      type: category.type,
      pax: category.pax,
      image: null,
      bigBed: category.bigBed,
      smallBed: category.smallBed,
    },
    onSubmit: async (values) => {
      setLoading(true);
      const category = await editUseCase.execute(values.id, values);
      dispatch(editCategory(category));
      setLoading(false);
      onOpenChange();
      toast.success("Catégorie de chambre modifiée avec succès!", {
        position: "bottom-right",
        toastId: "edit-category",
      });
    },
  });

  return { formik, loading };
};

export const useDeleteCategory = (id: string) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const deleteUseCase = container.resolve<DeleteCategoryUseCase>(
    DeleteCategoryInteractor
  );

  const handleDelete = async () => {
    setLoading(true);
    await deleteUseCase.execute(id);
    dispatch(deleteCategory(id));
    setLoading(false);
    toast.success("Catégorie de chambre supprimée avec succès!", {
      position: "bottom-right",
      toastId: "delete-category",
    });
  };

  return { loading, handleDelete };
};
