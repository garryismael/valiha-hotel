import { Reservation } from "@/domain/entities/reservation";
import {
  CreateShuttleInteractor,
  CreateShuttleUseCase,
  ShuttleBaseRequest,
} from "@/domain/use-cases/shuttle";
import container from "@/infrastructures/config/container.config";
import { addShuttle } from "@/lib/store/slices/reservation-slice";
import { toDate } from "@/lib/utils/date";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import useFormModal from "./useFormModal";
import { useAppDispatch } from "./useStore";

interface ShuttleForm extends ShuttleBaseRequest {
  selection: string;
}

export const useCreateShuttle = (reservation: Reservation) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();

  const createShuttle = container.resolve<CreateShuttleUseCase>(
    CreateShuttleInteractor
  );
  const dispatch = useAppDispatch();

  const onDestinationChanged = (value: string) => {
    formik.setFieldValue("selection", value);
    if (value === "other") {
      value = "";
    }
    
    formik.setFieldValue("destination", value);
  };

  const formik = useFormik<ShuttleForm>({
    initialValues: {
      date: toDate(reservation.checkIn),
      destination: "",
      flightName: "",
      flightNumber: "",
      selection: "",
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

  return {
    formik,
    show,
    loading,
    handleOpen,
    handleClose,
    onDestinationChanged,
  };
};
