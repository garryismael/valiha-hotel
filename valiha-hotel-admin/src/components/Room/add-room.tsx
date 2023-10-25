"use client";
import { useCategoryList } from "@/hooks/useCategory";
import { useRoomForm } from "@/hooks/useRoom";
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
} from "@nextui-org/react";
import { useRef } from "react";
import { FaPlus, FaUpload } from "react-icons/fa6";

const AddRoom = () => {
  const { formik, onOpen, isOpen, onOpenChange } = useRoomForm();
  const categories = useCategoryList();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <>
        <Button
          onPress={onOpen}
          color="primary"
          radius="sm"
          startContent={<FaPlus size={16} />}
        >
          Chambres
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <form onSubmit={formik.handleSubmit}>
                <ModalHeader className="flex flex-col gap-1 text-center">
                  Ajouter une chambre
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
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Annuler
                  </Button>
                  <Button color="primary" onPress={onClose} type="submit">
                    Ajouter
                  </Button>
                </ModalFooter>
              </form>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default AddRoom;
