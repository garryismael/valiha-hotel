"use client";
import { useCategoryForm } from "@/hooks/useCategory";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useRef } from "react";
import { FaUpload } from "react-icons/fa6";

const AddCategory = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { formik, onOpen, isOpen, onOpenChange } = useCategoryForm();

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
              <form onSubmit={formik.handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Add Category
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Title"
                    variant="bordered"
                    value={formik.values.title}
                    onValueChange={(value) =>
                      formik.setFieldValue("title", value)
                    }
                  />
                  <Input
                    label="Type"
                    variant="bordered"
                    value={formik.values.type}
                    onValueChange={(value) =>
                      formik.setFieldValue("type", value)
                    }
                  />
                  <Input
                    label="Pax"
                    type="number"
                    variant="bordered"
                    value={formik.values.pax.toString()}
                    onValueChange={(value) =>
                      formik.setFieldValue("pax", value)
                    }
                  />
                  <Input
                    label="Big Bed"
                    type="number"
                    variant="bordered"
                    value={formik.values.bigBed.toString()}
                    onValueChange={(value) =>
                      formik.setFieldValue("bigBed", value)
                    }
                  />
                  <Input
                    label="Small Bed"
                    type="number"
                    variant="bordered"
                    value={formik.values.smallBed.toString()}
                    onValueChange={(value) =>
                      formik.setFieldValue("smallBed", value)
                    }
                  />
                  <Input
                    label="Image"
                    variant="bordered"
                    value={formik.values.image?.name}
                    readOnly={true}
                    onClick={() => {
                      inputRef.current?.click();
                    }}
                    startContent={<FaUpload />}
                  />
                  <Input
                    ref={inputRef}
                    label="Image"
                    variant="bordered"
                    type="file"
                    className="input-file"
                    onChange={(e) => {
                      formik.setFieldValue("image", e.target.files?.item(0));
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onClick={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose} type="submit">
                    Add Category
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
