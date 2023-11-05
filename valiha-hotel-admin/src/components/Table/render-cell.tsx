'use client';
import { User as UserDataMapper } from "@/domain/entities/user";
import { DeleteIcon } from "@/icons/table/delete-icon";
import { EditIcon } from "@/icons/table/edit-icon";
import { EyeIcon } from "@/icons/table/eye-icon";
import { Tooltip, User } from "@nextui-org/react";
import React from "react";

interface Props {
  user: UserDataMapper;
  columnKey: string | React.Key;
}

export const RenderCell = ({ user, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = user[columnKey];
  switch (columnKey) {
    case "firstName":
      return (
        <User
            avatarProps={{radius: "lg", src: user.image}}
            description={user.lastName}
            name={cellValue}
          >
            {user.lastName}
          </User>
      );
    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <button onClick={() => console.log("View user", user.id)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip content="Edit user" color="secondary">
              <button onClick={() => console.log("Edit user", user.id)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              content="Delete user"
              color="danger"
              onClick={() => console.log("Delete user", user.id)}
            >
              <button>
                <DeleteIcon size={20} fill="#FF0080" />
              </button>
            </Tooltip>
          </div>
        </div>
      );
    default:
      return cellValue;
  }
};
