import { FindReservationInteractor } from "@/domain/use-cases/reservation";
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
  const reservation = await findOneUseCase.execute(params.id);
  return <InvoiceReservation reservation={reservation} />;
};

export default Page;
