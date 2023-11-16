import { locationState } from "@/constants/location";
import { Location } from "@/domain/entities/location";
import { useLocationEdit } from "@/hooks/useLocation";
import { EditIcon } from "@/icons/table/edit-icon";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";

type Props = {
  location: Location;
};

const LocationEdit = ({ location }: Props) => {
  const { formik, show, loading, handleOpen, handleClose } =
    useLocationEdit(location);
  return (
    <>
      <Button
        isIconOnly
        startContent={<EditIcon size={20} fill="#979797" />}
        variant="light"
        color="default"
        onPress={handleOpen}
      ></Button>
      <Modal
        isOpen={show}
        onOpenChange={handleClose}
        placement="top-center"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={formik.handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Modifier une location
              </ModalHeader>
              <ModalBody>
                <Select
                  name="state"
                  variant="bordered"
                  radius="sm"
                  label="État de la location"
                  defaultSelectedKeys={[formik.values.state]}
                  onChange={formik.handleChange}
                  classNames={{
                    label: "z-1",
                  }}
                >
                  {Object.keys(locationState).map((key) => (
                    <SelectItem key={key} value={key}>
                      {locationState[key].value}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onClick={onClose}>
                  Annuler
                </Button>
                <Button color="primary" isLoading={loading} type="submit">
                  Modifier
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LocationEdit;
