import { breakfastColumns } from "@/constants/breakfast";
import { Reservation } from "@/domain/entities/reservation";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { RenderBreakfastCell } from "./render-breakfast";

type Props = {
  reservation: Reservation;
  callback?: () => void;
};

const BreakfastTable = ({ reservation, callback }: Props) => {
  return (
    <div className=" w-full flex flex-col gap-4">
      <Table aria-label="Breakfast Table">
        <TableHeader columns={breakfastColumns}>
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
        <TableBody items={reservation.breakfasts}>
          {(item) => (
            <TableRow>
              {(columnKey) => (
                <TableCell>
                  {RenderBreakfastCell({
                    breakfast: item,
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

export default BreakfastTable;
