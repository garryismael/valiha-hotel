import { shuttleColumns } from "@/constants/shuttle";
import { Reservation } from "@/domain/entities/reservation";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { RenderShuttleCell } from "./render-shuttle";

type Props = {
  reservation: Reservation;
  callback?: () => void;
};

const ShuttleTable = ({ reservation, callback }: Props) => {
  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Shuttle Table">
        <TableHeader columns={shuttleColumns}>
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
        <TableBody items={reservation.shuttles}>
          {(item) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
                  {RenderShuttleCell({
                    shuttle: item,
                    reservation,
                    columnKey: columnKey,
                    callback,
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

export default ShuttleTable;
