"use client";

import { Location } from "@/domain/entities/location";
import { DeleteIcon } from "@/icons/table/delete-icon";
import { Tooltip } from "@nextui-org/react";
import LocationDetailModal from "./Detail/location-detail-modal";
import LocationEdit from "./location-edit";

const LocationTableAction = ({ location }: { location: Location }) => {
  return (
    <div className="flex items-center gap-4 ">
      <div>
        <Tooltip content="Details">
          <LocationDetailModal location={location} />
        </Tooltip>
      </div>
      <div>
        <Tooltip content="Modifier" color="secondary">
          <LocationEdit location={location} />
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

export default LocationTableAction;
