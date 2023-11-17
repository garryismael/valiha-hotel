import InvoiceLocation from "@/components/InvoiceLocation";
import {
  FindLocationInteractor,
  FindLocationUseCase,
} from "@/domain/use-cases/location";
import {
  FindTransactionByPaymentIdInteractor,
  FindTransactionByPaymentUseCase,
} from "@/domain/use-cases/transaction";
import container from "@/infrastructures/config/container.config";

type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const findOneUseCase = container.resolve<FindLocationUseCase>(
    FindLocationInteractor
  );
  const findTransactionUseCase =
    container.resolve<FindTransactionByPaymentUseCase>(
      FindTransactionByPaymentIdInteractor
    );
  const location = await findOneUseCase.execute(params.id);
  const transaction = await findTransactionUseCase.execute(location.payment.id);
  return (
    <InvoiceLocation
      location={location}
      transaction={transaction}
    />
  );
};

export default Page;
