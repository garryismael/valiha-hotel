import { Reservation } from "@/domain/entities/reservation";
import { useCreateShuttle } from "@/hooks/useShuttle";
import { toDate } from "@/lib/utils/date";
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
import ReactDatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";

type Props = {
  reservation: Reservation;
};

const AddShuttle = (props: Props) => {
  const {
    formik,
    loading,
    show,
    handleOpen,
    handleClose,
    onDestinationChanged,
  } = useCreateShuttle(props.reservation);
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
                Ajouter une navette
              </ModalHeader>
              <ModalBody>
                <Input
                  name="flightName"
                  label="Nom du vol"
                  variant="bordered"
                  radius="sm"
                  value={formik.values.flightName}
                  onChange={formik.handleChange}
                />

                <Input
                  name="flightNumber"
                  label="Numéro du vol"
                  variant="bordered"
                  radius="sm"
                  value={formik.values.flightNumber}
                  onChange={formik.handleChange}
                />
                <Select
                  name="selection"
                  variant="bordered"
                  radius="sm"
                  label="Destination"
                  value={formik.values.destination}
                  onChange={(e) => onDestinationChanged(e.target.value)}
                  classNames={{
                    label: "z-1",
                  }}
                >
                  <SelectItem key="airport-to-hotel" value="airport-to-hotel">
                    Aéroport à l'hôtel
                  </SelectItem>
                  <SelectItem key="hotel-to-airport" value="hotel-to-airport">
                    Hôtel à l'aéroport
                  </SelectItem>
                  <SelectItem key="other" value="other">
                    Autre
                  </SelectItem>
                </Select>
                <Input
                  name="destination"
                  onChange={formik.handleChange}
                  value={formik.values.destination}
                  label="Autre destination"
                  variant="bordered"
                  radius="sm"
                  className={`w-full ${
                    formik.values.selection !== "other" ? "hidden" : "block"
                  }`}
                />
                <ReactDatePicker
                  selected={formik.values.date}
                  onChange={(date: Date) => formik.setFieldValue(`date`, date)}
                  dateFormat="dd/MM/yyyy HH:mm"
                  className="w-full"
                  showTimeSelect
                  timeFormat="HH:mm"
                  wrapperClassName="w-full"
                  minDate={toDate(props.reservation.checkIn)}
                  maxDate={toDate(props.reservation.checkOut)}
                  portalId="shuttles"
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
