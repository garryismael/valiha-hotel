import { Client } from "@/domain/entities/client";
import { EditIcon } from "@/icons/table/edit-icon";
import { EyeIcon } from "@/icons/table/eye-icon";
import { Tooltip } from "@nextui-org/react";

export const ClientTableActions = ({ client }: { client: Client }) => {
  return (
    <div className="flex items-center gap-4 ">
      <div>
        <Tooltip content="Réservation">
          <button onClick={() => console.log("detail", client.id)}>
            <EyeIcon size={20} fill="#979797" />
          </button>
        </Tooltip>
      </div>
      <div>
        <Tooltip content="Modifier" color="secondary">
          <button
            onClick={() => console.log("modifier réservation", client.id)}
          >
            <EditIcon size={20} fill="#979797" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};
