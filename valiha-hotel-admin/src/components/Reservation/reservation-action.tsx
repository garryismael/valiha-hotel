"use client";

import { Reservation } from "@/domain/entities/reservation";
import { DeleteIcon } from "@/icons/table/delete-icon";
import { EditIcon } from "@/icons/table/edit-icon";
import { Tooltip } from "@nextui-org/react";
import ReservationDetailModal from "./Detail/reservation-detail-modal";
import ReservationEdit from "./reservation-edit";

const ReservationActions = ({ reservation }: { reservation: Reservation }) => {
  return (
    <div className="flex items-center gap-4 ">
      <div>
        <Tooltip content="Details">
          <ReservationDetailModal reservation={reservation} />
        </Tooltip>
      </div>
      <div>
        <Tooltip content="Modifier" color="secondary">
          <ReservationEdit reservation={reservation} />
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
