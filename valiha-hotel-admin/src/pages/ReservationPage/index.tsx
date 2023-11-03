"use client";

import Breadcrumbs from "@/components/BreadCrumbs";
import ReservationTable from "@/components/Reservation/reservation-table";
import { reservationBreadcrumbs } from "@/constants/reservation";
import { Reservation } from "@/domain/entities/reservation";

export type ReservationProps = {
  reservations: Reservation[];
};

function ReservationPage(props: ReservationProps) {
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={reservationBreadcrumbs} />
      <h3 className="title">Reservations</h3>
      <ReservationTable {...props} />
    </main>
  );
}

export default ReservationPage;
