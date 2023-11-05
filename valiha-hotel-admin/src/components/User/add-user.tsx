"use client";
import { useUserForm } from "@/hooks/useUser";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRef } from "react";
import { FaUpload, FaUserPlus } from "react-icons/fa6";

export const AddUser = () => {
  const { formik, isOpen, onOpen, onOpenChange } = useUserForm();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <>
        <Button
          onPress={onOpen}
          color="primary"
          startContent={<FaUserPlus size={18} />}
        >
          Administrateur
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Ajouter un Administrateur
                </ModalHeader>
                <ModalBody>
                  <Input
                    radius="sm"
                    label="Nom"
                    name="lastName"
                    onChange={formik.handleChange}
                    variant="bordered"
                  />
                  <Input
                    radius="sm"
                    label="Prénom"
                    name="firstName"
                    onChange={formik.handleChange}
                    variant="bordered"
                  />
                  <Input
                    radius="sm"
                    label="Numéro téléphone"
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    variant="bordered"
                  />
                  <Input
                    radius="sm"
                    label="Email"
                    name="email"
                    onChange={formik.handleChange}
                    variant="bordered"
                  />
                  <Input
                    radius="sm"
                    label="Image de l'administrateur"
                    variant="bordered"
                    value={formik.values.image?.name}
                    readOnly={true}
                    onClick={() => {
                      inputRef.current?.click();
                    }}
                    startContent={<FaUpload />}
                  />
                  <Input
                    radius="sm"
                    name=""
                    ref={inputRef}
                    label="Image"
                    variant="bordered"
                    type="file"
                    className="input-file"
                    onChange={(e) => {
                      formik.setFieldValue("image", e.target.files?.item(0));
                    }}
                  />
                  <Input
                    radius="sm"
                    label="Mot de passe"
                    name="password"
                    onChange={formik.handleChange}
                    type="password"
                    variant="bordered"
                  />
                  <Input
                    radius="sm"
                    label="Confirmation du mot de passe"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    type="password"
                    variant="bordered"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Annuler
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Ajouter
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};
