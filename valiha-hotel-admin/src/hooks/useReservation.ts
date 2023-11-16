import { Reservation } from "@/domain/entities/reservation";
import { useAppDispatch, useAppSelector } from "./useStore";
import { useEffect } from "react";
import {
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

export const useReservationList = (reservations: Reservation[]) => {
  const dispatch = useAppDispatch();
  const { reservations: data } = useAppSelector((state) => state.reservation);
  useEffect(() => {
    dispatch(setReservations(reservations));
  }, []);

  return data;
};

/**
 * private List<String> roomIds;
  private String checkIn;
  private String checkOut;
  private String state;
  private boolean parking;
  private int pax;
 */
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
