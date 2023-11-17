import { Reservation } from "@/domain/entities/reservation";
import { useAppDispatch, useAppSelector } from "./useStore";
import { useEffect } from "react";
import {
  editPayment,
  editReservation,
  setReservations,
} from "@/lib/store/slices/reservation-slice";
import { useFormik } from "formik";
import { ReservationBaseRequest } from "@/domain/use-cases/reservation";
import useFormModal from "./useFormModal";
import {
  EditReservationUseCase,
  EditReservationInteractor,
} from "@/domain/use-cases/reservation";
import container from "@/infrastructures/config/container.config";
import { toast } from "react-toastify";
import {
  EditPaymentInteractor,
  EditPaymentUseCase,
  PaymentRequest,
} from "@/domain/use-cases/payment";
import { Payment } from "@/domain/entities/payment";

export const useReservationList = (reservations: Reservation[]) => {
  const dispatch = useAppDispatch();
  const { reservations: data } = useAppSelector((state) => state.reservation);
  useEffect(() => {
    dispatch(setReservations(reservations));
  }, []);

  return data;
};

export const useReservationEdit = (reservation: Reservation) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();
  const editUseCase = container.resolve<EditReservationUseCase>(
    EditReservationInteractor
  );
  const dispatch = useAppDispatch();
  const formik = useFormik<ReservationBaseRequest>({
    initialValues: {
      roomIds: reservation.rooms.map((room) => room.id),
      checkIn: reservation.checkIn,
      checkOut: reservation.checkOut,
      state: reservation.state,
      parking: reservation.parking,
      pax: reservation.pax,
    },
    async onSubmit(values) {
      setLoading(true);
      const data = await editUseCase.execute(reservation.id, values);
      dispatch(editReservation(data));
      handleClose();
      setLoading(false);
      toast.success("Réservation modifiée avec succès!", {
        position: "bottom-right",
        toastId: "edit-reservation",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};

export const usePaymentEdit = (payment: Payment, amount: number) => {
  const { show, loading, setLoading, handleClose, handleOpen } = useFormModal();
  const editUseCase = container.resolve<EditPaymentUseCase>(
    EditPaymentInteractor
  );
  const dispatch = useAppDispatch();
  const formik = useFormik<PaymentRequest>({
    initialValues: {
      discount: payment.discount,
      state: payment.state,
      amount,
      paymentType: ""
    },
    async onSubmit(values) {
      setLoading(true);
      const data = await editUseCase.execute(payment.id, values);
      dispatch(editPayment(data));
      handleClose();
      setLoading(false);
      toast.success("Payment modifié avec succès!", {
        position: "bottom-right",
        toastId: "edit-reservation",
      });
    },
  });

  return { formik, show, loading, handleOpen, handleClose };
};
