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
import BreakfastTable from "./breakfast-table";
import AddBreakfast from "./add-breakfast";

type Props = {
  reservation: Reservation;
};

const BreakfastModalTable = ({ reservation }: Props) => {
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
        {reservation.breakfasts.length}
      </Button>
      <Modal
        isOpen={show}
        onOpenChange={handleClose}
        placement="top-center"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Liste de petit-déjeuner de {reservation.client.firstName}
              </ModalHeader>
              <ModalBody>
                <div className="w-fit">
                  <AddBreakfast reservation={reservation} />
                </div>
                <BreakfastTable reservation={reservation} callback={onClose} />
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

export default BreakfastModalTable;
