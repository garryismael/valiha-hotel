import { Reservation } from "@/domain/entities/reservation";
import { useCreateShuttle } from "@/hooks/useShuttle";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
} from "@nextui-org/react";
import { FaCalendarDays, FaPlus } from "react-icons/fa6";
import ReactDatePicker from "react-datepicker";
import { MdAdd } from "react-icons/md";

type Props = {
  reservation: Reservation;
};

const AddShuttle = (props: Props) => {
  const { formik, handleOpen, handleClose, loading, show } = useCreateShuttle(
    props.reservation
  );
  return (
    <>
      <Button
        onPress={handleOpen}
        size="sm"
        radius="lg"
        color="primary"
        variant="bordered"
        endContent={<MdAdd size={18} />}
      >
        navette
      </Button>
      <Modal isOpen={show} onOpenChange={handleClose} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={formik.handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Ajouter une navette
              </ModalHeader>
              <ModalBody>
                <Input
                  name="title"
                  label="Nom du vol"
                  variant="bordered"
                  radius="sm"
                  value={formik.values.flightName}
                  onChange={formik.handleChange}
                />

                <Input
                  name="pax"
                  label="Numéro du vol"
                  type="number"
                  variant="bordered"
                  radius="sm"
                  value={formik.values.flightNumber}
                  onChange={formik.handleChange}
                />
                <Input
                  name="bigBed"
                  label="Destination"
                  type="number"
                  variant="bordered"
                  radius="sm"
                  value={formik.values.destination}
                  onChange={formik.handleChange}
                />
                <ReactDatePicker
                  selected={formik.values.date}
                  onChange={(date: Date) => formik.setFieldValue(`date`, date)}
                  dateFormat="dd/MM/yyyy HH:mm"
                  className="w-full"
                  showTimeSelect
                  timeFormat="HH:mm"
                  wrapperClassName="w-full"
                  customInput={
                    <Input
                      onChange={formik.handleChange}
                      label="Date de la Navette"
                      variant="bordered"
                      radius="sm"
                      className="w-1/2"
                      startContent={<FaCalendarDays />}
                    />
                  }
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onClick={onClose}>
                  Annuler
                </Button>
                <Button color="primary" isLoading={loading} type="submit">
                  Ajouter
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddShuttle;
