"use client";

import Breadcrumbs from "@/components/BreadCrumbs";
import { reservationDetailBreadcrumbs } from "@/constants/reservation";
import { Reservation } from "@/domain/entities/reservation";

type Props = {
  reservation: Reservation;
};

const ReservationDetailPage = ({ reservation }: Props) => {
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={reservationDetailBreadcrumbs} />
      <h3 className="title">
        Detail de la réservation de {reservation.client.firstName}{" "}
        {reservation.client.lastName}
      </h3>
    </main>
  );
};

export default ReservationDetailPage;
