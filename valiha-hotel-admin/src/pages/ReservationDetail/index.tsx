"use client";

import Breadcrumbs from "@/components/BreadCrumbs";
import AddBreakfast from "@/components/Breakfast/add-breakfast";
import BreakfastTable from "@/components/Breakfast/breakfast-table";
import ReservationTableDetail from "@/components/Reservation/Detail/reservation-table";
import AddShuttle from "@/components/Shuttles/add-shuttle";
import ShuttleTable from "@/components/Shuttles/shuttle-table";
import { reservationDetailBreadcrumbs } from "@/constants/reservation";
import { Reservation } from "@/domain/entities/reservation";

type Props = {
  reservation: Reservation;
};

const ReservationDetailPage = ({ reservation }: Props) => {
  return (
    <>
      <ReservationTableDetail reservation={reservation} />
      <div className="flex flex-col gap-2 my-4">
        <h1 className="text-lg font-semibold">Navettes</h1>
        <div className="w-fit">
          <AddShuttle reservation={reservation} />
        </div>
        <ShuttleTable reservation={reservation} />
      </div>
      <div className="flex flex-col gap-2 my-4">
        <h1 className="text-lg font-semibold">Petit-Déjeuners</h1>
        <div className="w-fit">
          <AddBreakfast reservation={reservation} />
        </div>
        <BreakfastTable reservation={reservation} />
      </div>
    </>
  );
};

export default ReservationDetailPage;
