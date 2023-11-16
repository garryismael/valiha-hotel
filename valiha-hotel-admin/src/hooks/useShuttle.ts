import { Reservation } from "@/domain/entities/reservation";
import { Shuttle } from "@/domain/entities/shuttle";
import {
  CreateShuttleInteractor,
  CreateShuttleUseCase,
  DeleteShuttleInteractor,
  DeleteShuttleUseCase,
  EditShuttleInteractor,
  EditShuttleUseCase,
  ShuttleBaseRequest,
  ShuttleRequest,
} from "@/domain/use-cases/shuttle";
import container from "@/infrastructures/config/container.config";
import {
  addShuttle,
  editShuttle,
  removeShuttle,
} from "@/lib/store/slices/reservation-slice";
import { toDate, toDateTime } from "@/lib/utils/date";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import useFormModal from "./useFormModal";
import { useAppDispatch } from "./useStore";

interface ShuttleForm extends ShuttleBaseRequest {
  selection: string;
}

interface ShuttleEditForm extends ShuttleRequest {
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

export const useEditShuttle = (reservation: Reservation, shuttle: Shuttle) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();
  const editUseCase = container.resolve<EditShuttleUseCase>(
    EditShuttleInteractor
  );
  const dispatch = useAppDispatch();

  const formik = useFormik<ShuttleEditForm>({
    initialValues: {
      date: toDateTime(shuttle.date),
      destination: shuttle.destination,
      flightName: shuttle.flightName,
      flightNumber: shuttle.flightNumber,
      selection: shuttle.destination,
      state: shuttle.state,
    },
    async onSubmit(values) {
      setLoading(true);
      const data = await editUseCase.execute(shuttle.id, {
        date: values.date,
        destination: values.destination,
        flightName: values.flightName,
        flightNumber: values.flightNumber,
        state: values.state,
      });
      dispatch(
        editShuttle({
          shuttle: data,
          reservationId: reservation.id,
        })
      );
      setLoading(false);
      handleClose();
      toast.success("Navette modifiée avec succès!", {
        position: "bottom-right",
        toastId: "create-shuttle",
      });
    },
  });

  const onDestinationChanged = (value: string) => {
    formik.setFieldValue("selection", value);
    if (value === "other") {
      value = "";
    }

    formik.setFieldValue("destination", value);
  };

  return {
    formik,
    show,
    loading,
    handleOpen,
    handleClose,
    onDestinationChanged,
  };
};

export const useDeleteShuttle = (
  reservation: Reservation,
  shuttle: Shuttle
) => {
  const { show, loading, setLoading, handleOpen, handleClose } = useFormModal();
  const dispatch = useAppDispatch();

  const deleteUseCase = container.resolve<DeleteShuttleUseCase>(
    DeleteShuttleInteractor
  );

  const handleDelete = async () => {
    setLoading(true);
    await deleteUseCase.execute(shuttle.id, reservation.id);
    dispatch(
      removeShuttle({
        reservationId: reservation.id,
        shuttle,
      })
    );
    setLoading(false);
    toast.success("Navette supprimée avec succès!", {
      position: "bottom-right",
      toastId: "delete-room",
    });
  };
  return { show, handleOpen, loading, handleDelete, handleClose };
};
