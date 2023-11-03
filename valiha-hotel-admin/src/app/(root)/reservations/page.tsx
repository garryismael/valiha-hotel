import ReservationPage from "@/pages/ReservationPage";
import React from "react";
import container from "@/infrastructures/config/container.config";
import {
  FindReservationsInteractor,
  FindReservationsUseCase,
} from "@/domain/use-cases/reservation";

const Page = async () => {
  const findAllUseCase = container.resolve<FindReservationsUseCase>(
    FindReservationsInteractor
  );
  const reservations = await findAllUseCase.execute();
  return <ReservationPage reservations={reservations} />;
};

export default Page;
