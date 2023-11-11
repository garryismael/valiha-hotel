import { shuttleDestinations, shuttleState } from "@/constants/shuttle";
import { Reservation } from "@/domain/entities/reservation";
import { Shuttle } from "@/domain/entities/shuttle";
import { useEditShuttle } from "@/hooks/useShuttle";
import { EditIcon } from "@/icons/table/edit-icon";
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

type Props = {
  reservation: Reservation;
  shuttle: Shuttle;
};

const EditShuttle = (props: Props) => {
  const {
    formik,
    handleOpen,
    handleClose,
    loading,
    show,
    onDestinationChanged,
  } = useEditShuttle(props.reservation, props.shuttle);

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
                Modifier une navette
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
                  defaultSelectedKeys={[formik.values.destination]}
                  onChange={(e) => onDestinationChanged(e.target.value)}
                  classNames={{
                    label: "z-1",
                  }}
                >
                  {Object.keys(shuttleDestinations).map((key) => (
                    <SelectItem key={key} value={key}>
                      {
                        shuttleDestinations[
                          key as keyof typeof shuttleDestinations
                        ]
                      }
                    </SelectItem>
                  ))}
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
                <Select
                  name="state"
                  variant="bordered"
                  radius="sm"
                  label="État de la navette"
                  defaultSelectedKeys={[formik.values.state]}
                  onChange={formik.handleChange}
                  classNames={{
                    label: "z-1",
                  }}
                >
                  {Object.keys(shuttleState).map((key) => (
                    <SelectItem key={key} value={key}>
                      {shuttleState[key].value}
                    </SelectItem>
                  ))}
                </Select>
                <ReactDatePicker
                  selected={formik.values.date}
                  onChange={(date: Date) => formik.setFieldValue("date", date)}
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

export default EditShuttle;
