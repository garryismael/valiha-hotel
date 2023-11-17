import { FindReservationInteractor } from "@/domain/use-cases/reservation";
import {
  FindTransactionByPaymentIdInteractor,
  FindTransactionByPaymentUseCase,
} from "@/domain/use-cases/transaction";
import container from "@/infrastructures/config/container.config";
import InvoiceReservation from "@/pages/Invoice/InvoiceReservation";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const findOneUseCase = container.resolve<FindReservationInteractor>(
    FindReservationInteractor
  );
  const findTransactionUseCase =
    container.resolve<FindTransactionByPaymentUseCase>(
      FindTransactionByPaymentIdInteractor
    );
  const reservation = await findOneUseCase.execute(params.id);
  const transaction = await findTransactionUseCase.execute(reservation.payment.id);
  return (
    <InvoiceReservation reservation={reservation} transaction={transaction} />
  );
};

export default Page;
