"use client";

import { reservationDetailColumns } from "@/constants/reservation";
import { Reservation } from "@/domain/entities/reservation";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { ReservationRenderCell } from "./reservation-render-cell";

type Props = {
  reservation: Reservation;
}

const ReservationTableDetail = (props: Props) => {

  return (
    <div className=" w-full flex flex-col gap-4">
      <Table
        isStriped
        aria-label="Reservation Table"
      >
        <TableHeader columns={reservationDetailColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              width={column.uid === "rooms" ? 150 : 100}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          items={[props.reservation]}
          emptyContent={"Aucune données à afficher."}
        >
          {(reservation) => (
            <TableRow>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {ReservationRenderCell({
                    reservation,
                    columnKey,
                  })}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReservationTableDetail;
