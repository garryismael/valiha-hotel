import { Breakfast } from "@/domain/entities/breakfast";
import { Reservation } from "@/domain/entities/reservation";
import {
  BreakfastBaseRequest,
  BreakfastRequest,
  CreateBreakfastInteractor,
  CreateBreakfastUseCase,
  DeleteBreakfastInteractor,
  DeleteBreakfastUseCase,
  EditBreakfastInteractor,
  EditBreakfastUseCase,
} from "@/domain/use-cases/breakfasts";
import container from "@/infrastructures/config/container.config";
import {
  addBreakfast,
  editBreakfast,
  removeBreakfast,
} from "@/lib/store/slices/reservation-slice";
import { toDate } from "@/lib/utils/date";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import useFormModal from "./useFormModal";
import { useAppDispatch } from "./useStore";

export const useCreateBreakfast = (reservation: Reservation) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();

  const createBreakfast = container.resolve<CreateBreakfastUseCase>(
    CreateBreakfastInteractor
  );
  const dispatch = useAppDispatch();

  const formik = useFormik<BreakfastBaseRequest>({
    initialValues: {
      date: toDate(reservation.checkIn),
    },
    async onSubmit(values: BreakfastBaseRequest) {
      setLoading(true);
      const breakfast = await createBreakfast.execute(reservation.id, values);
      dispatch(
        addBreakfast({
          breakfast,
          reservationId: reservation.id,
        })
      );
      setLoading(false);
      handleClose();
      toast.success("Petit-déjeuner ajouté avec succès!", {
        position: "bottom-right",
        toastId: "create-breakfast",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};

export const useEditBreakfast = (
  reservation: Reservation,
  breakfast: Breakfast
) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();

  const editUseCase = container.resolve<EditBreakfastUseCase>(
    EditBreakfastInteractor
  );
  const dispatch = useAppDispatch();

  const formik = useFormik<BreakfastRequest>({
    initialValues: {
      date: toDate(reservation.checkIn),
      state: breakfast.state,
    },
    async onSubmit(values) {
      setLoading(true);
      const data = await editUseCase.execute(breakfast.id, values);
      dispatch(
        editBreakfast({
          breakfast: data,
          reservationId: reservation.id,
        })
      );
      setLoading(false);
      handleClose();
      toast.success("Petit-déjeuner ajouté avec succès!", {
        position: "bottom-right",
        toastId: "create-breakfast",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};

export const useDeleteBreakfast = (
  reservation: Reservation,
  breakfast: Breakfast
) => {
  const { show, loading, setLoading, handleOpen, handleClose } = useFormModal();
  const dispatch = useAppDispatch();
  const deleteUseCase = container.resolve<DeleteBreakfastUseCase>(
    DeleteBreakfastInteractor
  );

  const handleDelete = async () => {
    setLoading(true);
    await deleteUseCase.execute(breakfast.id);
    dispatch(
      removeBreakfast({
        reservationId: reservation.id,
        breakfast: breakfast,
      })
    );
    setLoading(false);
    toast.success("Petit-déjeuner supprimé avec succès!", {
      position: "bottom-right",
      toastId: "delete-room",
    });
  };

  return { show, handleOpen, loading, handleDelete, handleClose };
};
