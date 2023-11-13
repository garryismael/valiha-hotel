import { Transaction } from "@/domain/entities/transaction";
import { getPaymentState, getPaymentType } from "@/lib/utils/payment";
import { Chip, User } from "@nextui-org/react";

interface Props {
  transaction: Transaction;
  columnKey: string | React.Key;
}
export const TransactionRenderCell = ({ transaction, columnKey }: Props) => {
  switch (columnKey) {
    case "user":
      return (
        <User
          avatarProps={{ radius: "lg", src: transaction.user.image }}
          description={transaction.user.email}
          name={transaction.user.firstName}
        >
          {transaction.user.email}
        </User>
      );
    case "paymentType":
      const paymentType = getPaymentType(transaction.paymentType);
      return (
        <div className="inline-flex flex-col items-start gap-2">
          <Chip color={paymentType.color} size="sm" variant="flat">
            {paymentType.value}
          </Chip>
        </div>
      );
    case "paymentState":
      const paymentState = getPaymentState(transaction.payment.state);
      return (
        <div className="inline-flex flex-col items-start gap-2">
          <Chip color={paymentState.color} size="sm" variant="flat">
            {paymentState.value}
          </Chip>
        </div>
      );
    case "discount":
      return (
        <Chip color="primary" size="sm" variant="solid">
          {transaction.payment.discount} %
        </Chip>
      );
    default:
      //@ts-ignore
      const cellValue = transaction[columnKey];
      return cellValue;
  }
};
