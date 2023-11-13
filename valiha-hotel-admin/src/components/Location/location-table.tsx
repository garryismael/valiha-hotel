"use client";

import { locationColumns } from "@/constants/location";
import { Location } from "@/domain/entities/location";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { LocationRenderCell } from "./render-table";

type Props = {
  locations: Location[];
};

const LocationTable = ({ locations }: Props) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  const pages = Math.ceil(locations.length / rowsPerPage);

  const data = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return locations.slice(start, end);
  }, [page, locations]);

  return (
    <Table
      isStriped
      aria-label="Location Table"
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
      <TableBody items={data} emptyContent={"Aucune données à afficher."}>
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
  );
};

export default LocationTable;
