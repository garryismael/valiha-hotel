"use client";

import { locationColumns } from "@/constants/location";
import { Location } from "@/domain/entities/location";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { LocationRenderCell } from "./location-render-cell";

type Props = {
  location: Location;
}

const LocationTableDetail = (props: Props) => {

  return (
    <div className=" w-full flex flex-col gap-4">
      <Table
        isStriped
        aria-label="Location Table"
      >
        <TableHeader columns={locationColumns}>
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
          items={[props.location]}
          emptyContent={"Aucune données à afficher."}
        >
          {(location) => (
            <TableRow>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {LocationRenderCell({
                    location,
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

export default LocationTableDetail;
