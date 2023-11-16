import {
  EditLocationInteractor,
  EditLocationUseCase,
  LocationRequest,
} from "@/domain/use-cases/location";
import { Location } from "@/domain/entities/location";
import { Payment } from "@/domain/entities/payment";
import {
  EditPaymentInteractor,
  EditPaymentUseCase,
  PaymentRequest,
} from "@/domain/use-cases/payment";
import container from "@/infrastructures/config/container.config";
import {
  editLocation,
  editLocationPayment,
  setLocations,
} from "@/lib/store/slices/location-slice";
import { useFormik } from "formik";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useFormModal from "./useFormModal";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useLocationList = (locations: Location[]) => {
  const dispatch = useAppDispatch();
  const { locations: data } = useAppSelector((state) => state.location);
  useEffect(() => {
    dispatch(setLocations(locations));
  }, []);

  return data;
};

export const usePaymentEdit = (payment: Payment) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();
  const editUseCase = container.resolve<EditPaymentUseCase>(
    EditPaymentInteractor
  );
  const dispatch = useAppDispatch();
  const formik = useFormik<PaymentRequest>({
    initialValues: {
      discount: payment.discount,
      state: payment.state,
    },
    async onSubmit(values) {
      setLoading(true);
      const data = await editUseCase.execute(payment.id, values);
      dispatch(editLocationPayment(data));
      handleClose();
      setLoading(false);
      toast.success("Payment modifié avec succès!", {
        position: "bottom-right",
        toastId: "edit-location",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};

export const useLocationEdit = (location: Location) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();
  const editUseCase = container.resolve<EditLocationUseCase>(
    EditLocationInteractor
  );
  const dispatch = useAppDispatch();
  const formik = useFormik<LocationRequest>({
    initialValues: {
      carIds: location.cars.map((car) => car.id),
      destination: location.destination,
      end: location.end,
      reason: location.reason,
      start: location.start,
      state: location.state,
    },
    async onSubmit(values) {
      setLoading(true);
      const data = await editUseCase.execute(location.id, values);
      dispatch(editLocation(data));
      handleClose();
      setLoading(false);
      toast.success("Location modifiée avec succès!", {
        position: "bottom-right",
        toastId: "edit-location",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};
