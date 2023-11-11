import { Reservation } from "@/domain/entities/reservation";
import useFormModal from "@/hooks/useFormModal";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { MdOpenInNew } from "react-icons/md";
import ShuttleTable from "./shuttle-table";
import AddShuttle from "./add-shuttle";

type Props = {
  reservation: Reservation;
};

const ShuttleModalTable = ({ reservation }: Props) => {
  const { handleOpen, handleClose, show } = useFormModal();
  return (
    <>
      <Button
        onPress={handleOpen}
        size="sm"
        radius="lg"
        color="primary"
        variant="bordered"
        endContent={<MdOpenInNew size={18} />}
      >
        {reservation.shuttles.length}
      </Button>
      <Modal
        isOpen={show}
        onOpenChange={handleClose}
        placement="top-center"
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Liste de navette de {reservation.client.firstName}
              </ModalHeader>
              <ModalBody>
                <div className="w-fit">
                  <AddShuttle reservation={reservation} />
                </div>
                <ShuttleTable reservation={reservation} callback={onClose} />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="bordered" onClick={onClose}>
                  Fermer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShuttleModalTable;
