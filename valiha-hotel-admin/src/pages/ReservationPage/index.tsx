"use client";

import Breadcrumbs from "@/components/BreadCrumbs";
import ReservationTable from "@/components/Reservation/reservation-table";
import { reservationBreadcrumbs } from "@/constants/reservation";
import { Reservation } from "@/domain/entities/reservation";
import { useReservationList } from "@/hooks/useReservation";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { Input } from "@nextui-org/react";

export type ReservationProps = {
  reservations: Reservation[];
};

function ReservationPage(props: ReservationProps) {
  const reservations = useReservationList(props.reservations);
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={reservationBreadcrumbs} />
      <h3 className="title">Liste de Reservations</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Recherche des réservations"
          />
          <DotsIcon />
        </div>
      </div>
      <ReservationTable reservations={reservations} />
    </main>
  );
}

export default ReservationPage;
