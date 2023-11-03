import { Room } from "@/domain/entities/room";
import { useDeleteRoom } from "@/hooks/useRoom";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  room: Room;
};

const DeleteRoom = ({ room, isOpen, onOpenChange }: Props) => {
  const { loading, handleDelete } = useDeleteRoom(room.id);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Supprimer une chambre
            </ModalHeader>
            <ModalBody>
              <p>Êtes-vous sur de supprimer la chambre {room.title}?</p>
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
  );
};

export default DeleteRoom;
