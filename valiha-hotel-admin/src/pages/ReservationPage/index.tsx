"use client";

import { Reservation } from "@/domain/entities/reservation";

type Props = {
  reservations: Reservation[];
};

function ReservationPage(props: Props) {
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      {props.reservations.length}
    </main>
  );
}

export default ReservationPage;
