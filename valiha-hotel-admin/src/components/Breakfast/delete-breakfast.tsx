import { Breakfast } from "@/domain/entities/breakfast";
import { Reservation } from "@/domain/entities/reservation";
import { useDeleteBreakfast } from "@/hooks/useBreakfast";
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
  breakfast: Breakfast;
  reservation: Reservation;
};

const DeleteBreakfast = ({ reservation, breakfast }: Props) => {
  const { show, loading, handleDelete, handleOpen, handleClose } =
    useDeleteBreakfast(reservation, breakfast);
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
                Supprimer une petit-déjeuner
              </ModalHeader>
              <ModalBody>
                <p>
                  Êtes-vous sur de supprimer le petit-déjeuner datant du{" "}
                  {breakfast.date}?
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

export default DeleteBreakfast;
