import { Reservation } from "@/domain/entities/reservation";
import useFormModal from "@/hooks/useFormModal";
import { EyeIcon } from "@/icons/table/eye-icon";
import ReservationDetailPage from "@/pages/ReservationDetail";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import ReservationTotalAmount from "./reservation-amount";
import Link from "next/link";

const ReservationDetailModal = ({
  reservation,
}: {
  reservation: Reservation;
}) => {
  const { handleOpen, handleClose, show } = useFormModal();
  return (
    <>
      <Button
        onPress={handleOpen}
        isIconOnly
        variant="light"
        startContent={<EyeIcon size={20} fill="#979797" />}
      ></Button>
      <Modal
        isOpen={show}
        onOpenChange={handleClose}
        placement="top-center"
        scrollBehavior="outside"
        size="5xl"
        backdrop="blur"
        classNames={{
          base: "!w-[80rem] !max-w-[80rem]",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center justify-between gap-1 pt-14">
                <h1>Detail d'une réservation</h1>
                <Link href={`/invoices/reservations/${reservation.id}`}>
                  <Button variant="bordered" color="primary">
                    Facturer
                  </Button>
                </Link>
              </ModalHeader>
              <ModalBody>
                <ReservationDetailPage reservation={reservation} />
              </ModalBody>
              <ModalFooter>
                <ReservationTotalAmount reservation={reservation} />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReservationDetailModal;
