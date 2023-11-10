import { Reservation } from "@/domain/entities/reservation";
import container from "@/infrastructures/config/container.config";
import useFormModal from "./useFormModal";
import {
  BreakfastBaseRequest,
  CreateBreakfastInteractor,
  CreateBreakfastUseCase,
} from "@/domain/use-cases/breakfasts";
import { useAppDispatch } from "./useStore";
import { useFormik } from "formik";
import { addBreakfast } from "@/lib/store/slices/reservation-slide";
import { toast } from "react-toastify";
import { toDate } from "@/lib/utils/date";

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
