import {
    CreateShuttleInteractor,
    CreateShuttleUseCase,
    ShuttleBaseRequest,
} from "@/domain/use-cases/shuttle";
import container from "@/infrastructures/config/container.config";
import { addShuttle } from "@/lib/store/slices/reservation-slide";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import useFormModal from "./useFormModal";
import { useAppDispatch } from "./useStore";
import { Reservation } from "@/domain/entities/reservation";

export const useCreateShuttle = (reservation: Reservation) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();

  const createShuttle = container.resolve<CreateShuttleUseCase>(
    CreateShuttleInteractor
  );
  const dispatch = useAppDispatch();

  const formik = useFormik<ShuttleBaseRequest>({
    initialValues: {
      date: new Date(),
      destination: "",
      flightName: "",
      flightNumber: "",
    },
    async onSubmit(values: ShuttleBaseRequest) {
      setLoading(true);
      const shuttle = await createShuttle.execute(reservation.id, values);
      dispatch(
        addShuttle({
          shuttle,
          reservationId: reservation.id,
        })
      );
      setLoading(false);
      handleClose();
      toast.success("Navette ajoutée avec succès!", {
        position: "bottom-right",
        toastId: "create-shuttle",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};
