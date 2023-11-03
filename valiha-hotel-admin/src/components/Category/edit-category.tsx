"use client";
import { categoryTypes } from "@/constants/category";
import { Category } from "@/domain/entities/category";
import { useCategoryEditForm } from "@/hooks/useCategory";
import {
  Button,
  DropdownItem,
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
import { FaUpload } from "react-icons/fa6";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  category: Category;
};

const EditCategory = ({ category, isOpen, onOpenChange }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const formik = useCategoryEditForm(category);

  return (
    <div>
      <>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
          isDismissable={false}
        >
          <ModalContent>
            {(onClose) => (
              <form onSubmit={formik.handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Modifier une catégorie de chambre
                </ModalHeader>
                <ModalBody>
                  <Input
                    name="title"
                    label="Intitulé"
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
                    defaultSelectedKeys={[category.type]}
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
                    label="Nombre de Pax"
                    type="number"
                    variant="bordered"
                    radius="sm"
                    value={formik.values.pax.toString()}
                    onChange={formik.handleChange}
                  />
                  <Input
                    name="bigBed"
                    label="Nombre de Grant Lit"
                    type="number"
                    variant="bordered"
                    radius="sm"
                    value={formik.values.bigBed.toString()}
                    onChange={formik.handleChange}
                  />
                  <Input
                    name="smallBed"
                    label="Nombre de Petit Lit"
                    type="number"
                    variant="bordered"
                    radius="sm"
                    value={formik.values.smallBed.toString()}
                    onChange={formik.handleChange}
                  />
                  <Input
                    label="Image de la catégorie"
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
                    Modifier
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

export default EditCategory;