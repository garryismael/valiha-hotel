import { paymentState } from "@/constants/payment";
import { Payment } from "@/domain/entities/payment";
import { usePaymentEdit } from "@/hooks/useReservation";
import { getPaymentState } from "@/lib/utils/payment";
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

type Props = {
  payment: Payment;
};

const ReservationPaymentEdit = ({ payment }: Props) => {
  const { formik, show, loading, handleOpen, handleClose } =
    usePaymentEdit(payment);

  const payState = getPaymentState(formik.values.state);
  return (
    <>
      <Button
        color={payState.color}
        variant="flat"
        size="sm"
        radius="full"
        onPress={handleOpen}
      >
        {payState.value}
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
                Modifier un paiement
              </ModalHeader>
              <ModalBody>
                <Input
                  name="discount"
                  variant="bordered"
                  label="Remise"
                  value={formik.values.discount.toString()}
                  onChange={formik.handleChange}
                />
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
                  {Object.keys(paymentState).map((key) => (
                    <SelectItem key={key} value={key}>
                      {paymentState[key].value}
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

export default ReservationPaymentEdit;