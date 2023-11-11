"use client";

import { Breakfast } from "@/domain/entities/breakfast";
import { Reservation } from "@/domain/entities/reservation";
import { getBreakfastState } from "@/lib/utils/breakfast";
import { Chip, Tooltip } from "@nextui-org/react";
import React from "react";
import DeleteBreakfast from "./delete-breakfast";
import EditBreakfast from "./edit-breakfast";

interface Props {
  breakfast: Breakfast;
  reservation: Reservation;
  columnKey: string | React.Key;
  callback?: () => void;
}

export const RenderBreakfastCell = ({
  breakfast,
  reservation,
  columnKey,
  callback,
}: Props) => {
  // @ts-ignore
  const cellValue = breakfast[columnKey];
  switch (columnKey) {
    case "state":
      const breakfastState = getBreakfastState(breakfast.state);
      return (
        <Chip color={breakfastState.color} size="sm" variant="flat">
          {breakfastState.value}
        </Chip>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Modifier" color="secondary">
              <EditBreakfast reservation={reservation} breakfast={breakfast} />
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Supprimer" color="danger">
              <DeleteBreakfast
                reservation={reservation}
                breakfast={breakfast}
              />
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};
