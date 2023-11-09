"use client";
import { Room } from "@/domain/entities/room";
import { useApiCategory, useCategoryList } from "@/hooks/useCategory";
import { useRoomEditForm, useRoomForm } from "@/hooks/useRoom";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import { useRef } from "react";
import { FaPlus, FaUpload } from "react-icons/fa6";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  room: Room;
};

const EditRoom = ({ room, isOpen, onOpenChange }: Props) => {
  const { formik, loading } = useRoomEditForm(room, onOpenChange);
  const categories = useApiCategory();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <form onSubmit={formik.handleSubmit}>
            <ModalHeader className="flex flex-col gap-1">
              Modifier une chambre
            </ModalHeader>
            <ModalBody>
              <Input
                name="title"
                label="Intitulé de la chambre"
                variant="bordered"
                radius="sm"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <Select
                name="categoryId"
                label="Catégorie de la chambre"
                variant="bordered"
                radius="sm"
                placeholder="Sélectionner la catégorie de la chambre"
                onChange={formik.handleChange}
              >
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.title}
                  </SelectItem>
                ))}
              </Select>
              <Input
                name="price"
                label="Tarif de la chambre"
                variant="bordered"
                radius="sm"
                type="number"
                value={formik.values.price.toString()}
                onChange={formik.handleChange}
              />
              <Input
                label="Image de la chambre"
                variant="bordered"
                value={formik.values.file?.name}
                readOnly={true}
                radius="sm"
                onClick={() => {
                  inputRef.current?.click();
                }}
                startContent={<FaUpload />}
              />
              <Input
                name=""
                ref={inputRef}
                label="Image"
                variant="bordered"
                type="file"
                className="input-file"
                onChange={(e) => {
                  formik.setFieldValue("file", e.target.files?.item(0));
                }}
              />
              <Switch
                defaultSelected={formik.values.available}
                onValueChange={(isSelected) =>
                  formik.setFieldValue("available", isSelected)
                }
                color="primary"
              >
                Est Disponible?
              </Switch>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onClick={onClose}>
                Annuler
              </Button>
              <Button isLoading={loading} color="primary" type="submit">
                Ajouter
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EditRoom;
