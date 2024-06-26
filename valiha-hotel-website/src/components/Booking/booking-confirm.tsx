import {
  CreateReservationInteractor,
  CreateReservationUseCase,
} from "@/domain/use-cases/reservation";
import { ReservationForm } from "@/hooks/reservation";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import container from "@/infrastructure/config/container.config";
import { clearRooms } from "@/infrastructure/store/slices/booking-slice";
import { dateToString } from "@/infrastructure/utils/date";
import { getDays } from "@/utils/date";
import {
  getBreakfastPrice,
  getShuttlePrice,
  getTotalPrice,
} from "@/utils/reservation";
import {
  Button,
  Chip,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";

type Props = {
  form: ReservationForm;
  btnRef: React.RefObject<HTMLButtonElement>;
};

const BookingConfirm = ({ form, btnRef }: Props) => {
  const [loading, setLoading] = useState(false);
  const booking = useAppSelector((state) => state.booking);
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleConfirm = async () => {
    setLoading(true);
    const createUseCase = container.resolve<CreateReservationUseCase>(
      CreateReservationInteractor
    );

    try {
      await createUseCase.execute({
        rooms: booking.rooms,
        breakfasts: form.breakfasts.data,
        checkIn: dateToString(form.checkIn),
        checkOut: dateToString(form.checkOut),
        client: form.client,
        parking: form.parking,
        pax: form.pax,
        shuttles: form.shuttles.data,
      });
      setLoading(false);
      toast.success(t("reservation_added"), {
        position: "bottom-center",
        toastId: "create-breakfast",
      });
      dispatch(clearRooms());
      onClose();
      router.push("/rooms/find/", "/rooms/find/", { locale: i18n.language });
    } catch (er) {
      toast.error("Veuillez ressayer", {
        position: "bottom-center",
        toastId: "create-breakfast",
      });
    }
  };

  return (
    <>
      <Button
        ref={btnRef}
        variant="light"
        onPress={onOpen}
        className="btn btn-orange w-fit self-start invisible"
      >
        {t("reservation.booking.button")}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {t("reservation_confirmation")}
              </ModalHeader>
              <ModalBody>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">{t("chambres")}</h4>
                    <span>
                      {booking.rooms.map((room, index) => (
                        <span
                          key={room.id}
                          className="text-small text-default-400"
                        >
                          {room.category.title}
                          {index === booking.rooms.length - 1 ? "" : ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                  <Divider className="my-3 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">{t("client")}</h4>
                    <p className="flex flex-col text-right text-small text-default-400">
                      <span>
                        {form.client.firstName} {form.client.lastName}
                      </span>
                      <span>{form.client.email}</span>
                      <span>{form.client.phoneNumber}</span>
                    </p>
                  </div>
                  <Divider className="my-1 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">
                      {t("date_confirmation")}
                    </h4>{" "}
                    <p className="flex flex-col text-right text-small text-default-400">
                      <span>
                        {dateToString(form.checkIn)} -{" "}
                        {dateToString(form.checkOut)}
                      </span>
                      <span>
                        {getDays(form.checkIn, form.checkOut)} {t("par_nuit")}
                      </span>
                    </p>
                  </div>
                  <Divider className="my-1 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">
                      {t("nombre_de_pax")}
                    </h4>
                    <p className="flex flex-col text-small text-default-400">
                      {form.pax}
                    </p>
                  </div>
                  <Divider className="my-1 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">{t("parking")}</h4>
                    <p className="flex flex-col text-small text-default-400">
                      <Chip
                        variant="solid"
                        color={form.parking ? "success" : "secondary"}
                      >
                        {form.parking ? t("oui") : t("non")}
                      </Chip>
                    </p>
                  </div>
                  <Divider className="my-1 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">
                      {t("breakfasts_title")}
                    </h4>
                    <p className="flex flex-col text-small text-default-400">
                      {getBreakfastPrice(form)} MGA
                    </p>
                  </div>
                  <Divider className="my-1 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">{t("navettes")}</h4>
                    <p className="flex flex-col text-small text-default-400">
                      {getShuttlePrice(form)} MGA
                    </p>
                  </div>
                  <Divider className="my-1 w-full" />
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-medium">{t("total")}</h4>
                    <p className="flex flex-col text-base font-bold">
                      {getTotalPrice(form, booking.rooms)} MGA
                    </p>
                  </div>
                  <Divider className="my-1 w-full" />
                  <p className="text-sm text-primary-500">
                    {t("nb_email_send")}
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="bordered"
                  className="text-reddish-orange-500 border-reddish-orange-500"
                  onPress={() => {
                    setLoading(false);
                    onClose();
                  }}
                >
                  t("annuler")
                </Button>
                <Button
                  variant="light"
                  className="btn-orange"
                  isLoading={loading}
                  onPress={handleConfirm}
                >
                  {t("confirmer")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BookingConfirm;
