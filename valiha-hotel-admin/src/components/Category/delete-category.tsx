import { Category } from "@/domain/entities/category";
import { useDeleteCategory } from "@/hooks/useCategory";
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
  category: Category;
};

const DeleteCategory = ({ category, isOpen, onOpenChange }: Props) => {
  const { loading, handleDelete } = useDeleteCategory(category.id);
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
              Supprimer une catégorie de chambre
            </ModalHeader>
            <ModalBody>
              <p>
                Êtes-vous sur de supprimer la catégorie de chambre{" "}
                {category.title}?
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
  );
};

export default DeleteCategory;
