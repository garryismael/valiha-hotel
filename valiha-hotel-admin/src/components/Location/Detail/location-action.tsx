"use client";

import { Location } from "@/domain/entities/location";
import { DeleteIcon } from "@/icons/table/delete-icon";
import { EditIcon } from "@/icons/table/edit-icon";
import { Tooltip } from "@nextui-org/react";

const LocationActions = ({ location }: { location: Location }) => {
  return (
    <div className="flex items-center gap-4 ">
      <div>
        <Tooltip content="Modifier" color="secondary">
          <button
            onClick={() => console.log("modifier réservation", location.id)}
          >
            <EditIcon size={20} fill="#979797" />
          </button>
        </Tooltip>
      </div>
      <div>
        <Tooltip
          content="Supprimer"
          color="danger"
          onClick={() => console.log("supprimer location", location.id)}
        >
          <button>
            <DeleteIcon size={20} fill="#FF0080" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default LocationActions;
