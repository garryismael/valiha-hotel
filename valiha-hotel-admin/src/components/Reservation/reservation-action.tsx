"use client";

import { Reservation } from "@/domain/entities/reservation";
import { DeleteIcon } from "@/icons/table/delete-icon";
import { EditIcon } from "@/icons/table/edit-icon";
import { EyeIcon } from "@/icons/table/eye-icon";
import { Tooltip } from "@nextui-org/react";
import React from "react";

const ReservationActions = ({ reservation }: { reservation: Reservation }) => {
  return (
    <div className="flex items-center gap-4 ">
      <div>
        <Tooltip content="Details">
          <button onClick={() => console.log("detail", reservation.id)}>
            <EyeIcon size={20} fill="#979797" />
          </button>
        </Tooltip>
      </div>
      <div>
        <Tooltip content="Modifier" color="secondary">
          <button
            onClick={() => console.log("modifier réservation", reservation.id)}
          >
            <EditIcon size={20} fill="#979797" />
          </button>
        </Tooltip>
      </div>
      <div>
        <Tooltip
          content="Supprimer"
          color="danger"
          onClick={() => console.log("supprimer reservation", reservation.id)}
        >
          <button>
            <DeleteIcon size={20} fill="#FF0080" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ReservationActions;
