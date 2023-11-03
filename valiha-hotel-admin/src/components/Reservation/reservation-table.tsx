"use client";

import { reservationColumns } from "@/constants/reservation";
import { ReservationProps } from "@/pages/ReservationPage";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { ReservationRenderCell } from "./reservation-render-cell";

const ReservationTable = (props: ReservationProps) => {
  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Reservation Table">
        <TableHeader columns={reservationColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={props.reservations}>
          {(reservation) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
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

export default ReservationTable;
