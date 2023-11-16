import { locationState } from "@/constants/location";
import { Location } from "@/domain/entities/location";
import { useLocationEdit } from "@/hooks/useLocation";
import { EditIcon } from "@/icons/table/edit-icon";
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
  Textarea,
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
                  name="destination"
                  variant="bordered"
                  label="Destination"
                  defaultSelectedKeys={[formik.values.destination]}
                  onChange={formik.handleChange}
                  classNames={{
                    label: "z-1",
                  }}
                  radius="sm"
                  size="lg"
                >
                  <SelectItem key="Antananarivo" value="Antananarivo">
                    Antananarivo
                  </SelectItem>
                  <SelectItem key="hotel-to-airport" value="hotel-to-airport">
                    Hors Antananarivo
                  </SelectItem>
                </Select>
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
                <Textarea
                  name="reason"
                  label="Raison du trajet"
                  variant="bordered"
                  classNames={{
                    label: "z-1 text-medium",
                  }}
                  radius="sm"
                  size="lg"
                  value={formik.values.reason}
                  onChange={formik.handleChange}
                />
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
