"use client";
import { categoryTypes } from "@/constants/category";
import { useCategoryForm } from "@/hooks/useCategory";
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

const AddCategory = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { formik, onOpen, isOpen, onOpenChange } = useCategoryForm();

  return (
    <div>
      <>
        <Button
          onPress={onOpen}
          color="primary"
          startContent={<FaPlus size={16} />}
        >
          Catégorie
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <form onSubmit={formik.handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Ajouter une catégorie de chambre
                </ModalHeader>
                <ModalBody>
                  <Input
                    name="title"
                    label="Title"
                    variant="bordered"
                    radius="sm"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                  />
                  <Select
                    name="type"
                    label="Type de chambre"
                    variant="bordered"
                    radius="sm"
                    placeholder="Sélectionner le type de chambre"
                    onChange={formik.handleChange}
                  >
                    {Object.keys(categoryTypes).map((key: string) => (
                      <SelectItem key={key} value={key}>
                        {categoryTypes[key].text}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    name="pax"
                    label="Pax"
                    type="number"
                    variant="bordered"
                    radius="sm"
                    value={formik.values.pax.toString()}
                    onChange={formik.handleChange}
                  />
                  <Input
                    name="bigBed"
                    label="Big Bed"
                    type="number"
                    variant="bordered"
                    radius="sm"
                    value={formik.values.bigBed.toString()}
                    onChange={formik.handleChange}
                  />
                  <Input
                    name="smallBed"
                    label="Small Bed"
                    type="number"
                    variant="bordered"
                    radius="sm"
                    value={formik.values.smallBed.toString()}
                    onChange={formik.handleChange}
                  />
                  <Input
                    label="Image"
                    variant="bordered"
                    value={formik.values.image?.name}
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
                    radius="sm"
                    className="input-file"
                    onChange={(e) => {
                      formik.setFieldValue("image", e.target.files?.item(0));
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

export default AddCategory;
