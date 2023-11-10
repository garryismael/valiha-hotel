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
import { useMemo, useState } from "react";
import { Pagination } from "@nextui-org/react";

const ReservationTable = (props: ReservationProps) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const pages = Math.ceil(props.reservations.length / rowsPerPage);

  const reservations = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return props.reservations.slice(start, end);
  }, [page, props.reservations]);

  return (
    <div className=" w-full flex flex-col gap-4">
      <Table
        isStriped
        aria-label="Reservation Table"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
      >
        <TableHeader columns={reservationColumns}>
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
          items={reservations}
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

export default ReservationTable;
