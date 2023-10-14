"use client";
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
import React, { ChangeEvent, useRef, useState } from "react";
import { FaUpload } from "react-icons/fa6";

const AddCategory = () => {
  const [fileName, setFileName] = useState<string | undefined>("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);

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
                    value={fileName}
                    readOnly={true}
                    onClick={() => {
                      inputRef.current?.click();
                    }}
                    startContent={
                      <FaUpload />
                    }
                  />
                  <Input
                    ref={inputRef}
                    label="Image"
                    variant="bordered"
                    type="file"
                    className="input-file"
                    onChange={(e) => {
                      setFileName(e.target.files?.[0]?.name);
                    }}
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
