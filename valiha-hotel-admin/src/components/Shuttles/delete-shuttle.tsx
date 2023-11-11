import { Reservation } from "@/domain/entities/reservation";
import { Shuttle } from "@/domain/entities/shuttle";
import { useDeleteShuttle } from "@/hooks/useShuttle";
import { DeleteIcon } from "@/icons/table/delete-icon";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

type Props = {
  shuttle: Shuttle;
  reservation: Reservation;
};

const DeleteShuttle = ({ reservation, shuttle }: Props) => {
  const { show, loading, handleDelete, handleOpen, handleClose } =
    useDeleteShuttle(reservation, shuttle);
  return (
    <>
      <Button
        onPress={handleOpen}
        isIconOnly
        startContent={<DeleteIcon size={20} fill="#FF0080" />}
        variant="light"
        color="danger"
      ></Button>
      <Modal
        isOpen={show}
        onOpenChange={handleClose}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Supprimer une navette
              </ModalHeader>
              <ModalBody>
                <p>
                  Êtes-vous sur de supprimer la navette datant du {shuttle.date}
                  ?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="bordered" onClick={onClose}>
                  Annuler
                </Button>
                <Button
                  color="danger"
                  variant="solid"
                  isLoading={loading}
                  onClick={handleDelete}
                  type="button"
                >
                  Supprimer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteShuttle;
