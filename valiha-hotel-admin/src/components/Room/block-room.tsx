import { Room } from "@/domain/entities/room";
import { useBlockRoom } from "@/hooks/useRoom";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { Else, If, Then } from "react-if";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  room: Room;
};

const BlockRoom = ({ room, isOpen, onOpenChange }: Props) => {
  const { loading, handleBlock } = useBlockRoom(room);
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
              <If condition={room.available}>
                <Then>Bloquer une chambre</Then>
                <Else>Débloquer une chambre</Else>
              </If>
            </ModalHeader>
            <ModalBody>
              <p>
                Êtes-vous sur de {room.available ? "bloquer" : "débloquer"} la
                chambre {room.title}?
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
                onClick={() => handleBlock(onClose)}
                type="button"
              >
                <If condition={room.available}>
                  <Then>Bloquer</Then>
                  <Else>Débloquer</Else>
                </If>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default BlockRoom;
