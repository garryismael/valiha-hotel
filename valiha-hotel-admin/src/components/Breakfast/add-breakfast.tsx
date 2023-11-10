import { DATE_FORMAT } from "@/constants/date";
import { Reservation } from "@/domain/entities/reservation";
import { useCreateBreakfast } from "@/hooks/useBreakfast";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";

type Props = {
  reservation: Reservation;
};

const AddBreakfast = (props: Props) => {
  const { formik, handleOpen, handleClose, loading, show } = useCreateBreakfast(
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
        petit-déjeuner
      </Button>
      <Modal isOpen={show} onOpenChange={handleClose} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={formik.handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">
                Ajouter un petit-déjeuner
              </ModalHeader>
              <ModalBody>
                <ReactDatePicker
                  minDate={moment(
                    props.reservation.checkIn,
                    DATE_FORMAT
                  ).toDate()}
                  maxDate={moment(
                    props.reservation.checkOut,
                    DATE_FORMAT
                  ).toDate()}
                  selected={formik.values.date}
                  onChange={(date: Date) => formik.setFieldValue(`date`, date)}
                  dateFormat="dd/MM/yyyy"
                  className="w-full"
                  wrapperClassName="w-full"
                  customInput={
                    <Input
                      onChange={formik.handleChange}
                      label="Date du petit-déjeuner"
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

export default AddBreakfast;
