'use client';
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
import { FaUserPlus } from "react-icons/fa6";
  
  export const AddUser = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
    return (
      <div>
        <>
          <Button onPress={onOpen} color="primary" startContent={<FaUserPlus size={18}/>}>
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
                    <Input label="Email" variant="bordered" />
                    <Input label="First Name" variant="bordered" />
                    <Input label="Last Name" variant="bordered" />
                    <Input label="Phone Number" variant="bordered" />
  
                    <Input label="Password" type="password" variant="bordered" />
                    <Input
                      label="Confirm Password"
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
  