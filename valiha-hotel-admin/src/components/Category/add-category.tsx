import {
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "@nextui-org/react";
import React from "react";
import { FaUpload } from "react-icons/fa6";

const AddCategory = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <>
        <Button onPress={onOpen} color="primary">
          Add Category
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
                  Add Category
                </ModalHeader>
                <ModalBody>
                  <Input label="Title" variant="bordered" />
                  <Input label="Type" variant="bordered" />
                  <Input label="Pax" type="number" variant="bordered" />
                  <Input label="Big Bed" type="number" variant="bordered" />
                  <Input label="Small Bed" type="number" variant="bordered" />
                  <Input
                    label="Image"
                    variant="bordered"
                    readOnly={true}
                    onClick={() => console.log("Clicked")}
                    startContent={
                      <FaUpload />
                    }
                  />
                  <Input
                    label="Image"
                    variant="bordered"
                    type="file"
                    className="input-file"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Add Category
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

export default AddCategory;
