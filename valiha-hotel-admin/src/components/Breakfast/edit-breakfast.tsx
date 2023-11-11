import { breakfastState } from "@/constants/breakfast";
import { Breakfast } from "@/domain/entities/breakfast";
import { Reservation } from "@/domain/entities/reservation";
import { useEditBreakfast } from "@/hooks/useBreakfast";
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
  breakfast: Breakfast;
};

const EditBreakfast = (props: Props) => {
  const { formik, handleOpen, handleClose, loading, show } = useEditBreakfast(
    props.reservation,
    props.breakfast
  );

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
                Modifier un petit-déjeuner
              </ModalHeader>
              <ModalBody>
                <Select
                  name="state"
                  variant="bordered"
                  radius="sm"
                  label="État du petit-déjeuner"
                  defaultSelectedKeys={[formik.values.state]}
                  onChange={formik.handleChange}
                  classNames={{
                    label: "z-1",
                  }}
                >
                  {Object.keys(breakfastState).map((key) => (
                    <SelectItem key={key} value={key}>
                      {breakfastState[key].value}
                    </SelectItem>
                  ))}
                </Select>
                <ReactDatePicker
                  portalId="breakfasts"
                  minDate={toDate(props.reservation.checkIn)}
                  maxDate={toDate(props.reservation.checkOut)}
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

export default EditBreakfast;
