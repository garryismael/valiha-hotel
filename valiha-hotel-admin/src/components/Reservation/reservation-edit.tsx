/**
 * 
 * private List<String> roomIds;
  private String checkIn;
  private String checkOut;
  private String state;
  private boolean parking;
  private int pax;
 */

import { reservationState } from "@/constants/reservation";
import { Reservation } from "@/domain/entities/reservation";
import { useReservationEdit } from "@/hooks/useReservation";
import { EditIcon } from "@/icons/table/edit-icon";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem } from "@nextui-org/react";

type Props = {
  reservation: Reservation;
};

const ReservationEdit = ({ reservation }: Props) => {
  const { formik, show, loading, handleOpen, handleClose } =
    useReservationEdit(reservation);
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
                Modifier une réservation
              </ModalHeader>
              <ModalBody>
                <Select
                  name="state"
                  variant="bordered"
                  radius="sm"
                  label="État de la réservation"
                  defaultSelectedKeys={[formik.values.state]}
                  onChange={formik.handleChange}
                  classNames={{
                    label: "z-1",
                  }}
                >
                  {Object.keys(reservationState).map((key) => (
                    <SelectItem key={key} value={key}>
                      {reservationState[key].value}
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

export default ReservationEdit;
