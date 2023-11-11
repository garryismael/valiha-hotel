"use client";

import { Reservation } from "@/domain/entities/reservation";
import { Chip, Tooltip } from "@nextui-org/react";
import React from "react";
import DeleteShuttle from "./delete-shuttle";
import EditShuttle from "./edit-shuttle";
import { Shuttle } from "@/domain/entities/shuttle";
import { displayDestination, getShuttleState } from "@/lib/utils/shuttle";

interface Props {
  shuttle: Shuttle;
  reservation: Reservation;
  columnKey: string | React.Key;
  callback?: () => void;
}

export const RenderShuttleCell = ({
  shuttle,
  reservation,
  columnKey,
}: Props) => {
  // @ts-ignore
  const cellValue = shuttle[columnKey];
  switch (columnKey) {
    case "destination":
      return displayDestination(shuttle.destination);
    case "state":
      const shuttleState = getShuttleState(shuttle.state);
      return (
        <Chip color={shuttleState.color} size="sm" variant="flat">
          {shuttleState.value}
        </Chip>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Modifier" color="secondary">
              <EditShuttle reservation={reservation} shuttle={shuttle} />
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Supprimer" color="danger">
              <DeleteShuttle reservation={reservation} shuttle={shuttle} />
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};
