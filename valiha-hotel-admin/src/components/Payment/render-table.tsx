import { Payment } from "@/domain/entities/payment";
import { EyeIcon } from "@/icons/table/eye-icon";
import { getPaymentState } from "@/lib/utils/payment";
import { Chip, Tooltip } from "@nextui-org/react";

interface Props {
  payment: Payment;
  columnKey: string | React.Key;
}
export const PaymentRenderCell = ({ payment, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = payment[columnKey];
  switch (columnKey) {
    case "state":
      const paymentState = getPaymentState(payment.state);
      return (
        <div className="inline-flex flex-col items-start gap-2">
          <Chip color={paymentState.color} size="sm" variant="flat">
            {paymentState.value}
          </Chip>
        </div>
      );
    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Réservation">
              <button onClick={() => console.log("detail", payment.id)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    case "discount":
      return (
        <Chip color="primary" size="sm" variant="solid">
          {payment.discount} %
        </Chip>
      );
    default:
      return cellValue;
  }
};
