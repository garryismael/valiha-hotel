import PaymentPage from "@/pages/Payment";
import container from "@/infrastructures/config/container.config";
import {
  GetPaymentsInteractor,
  GetPaymentsUseCase,
} from "@/domain/use-cases/payment";

const Page = async () => {
  const getUseCase = container.resolve<GetPaymentsUseCase>(
    GetPaymentsInteractor
  );
  const payments = await getUseCase.execute();

  return <PaymentPage payments={payments} />;
};

export default Page;
