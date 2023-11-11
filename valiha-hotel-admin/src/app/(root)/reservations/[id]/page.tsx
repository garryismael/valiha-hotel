import { FindReservationInteractor } from "@/domain/use-cases/reservation";
import container from "@/infrastructures/config/container.config";
import ReservationDetailPage from "@/pages/ReservationDetail";

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

  return <ReservationDetailPage reservation={reservation} />;
};

export default Page;
