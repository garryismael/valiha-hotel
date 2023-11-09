import { Room } from "@/domain/entities/room";
import { getCategoryType } from "@/lib/utils/room";
import styles from "@/styles/room.module.css";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { FaEllipsisVertical, FaUserGroup } from "react-icons/fa6";
import { MdOutlineBed } from "react-icons/md";
import DeleteRoom from "./delete-room";

type Props = {
  room: Room;
};

const RoomCard = ({ room }: Props) => {
  const [key, setKey] = useState("");
  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.card__image}>
          <Image
            src={room.image}
            alt={room.title}
            fill={true}
            sizes="100%"
            className={styles.image}
          />
          <div className="actions">
            <Dropdown
              radius="sm"
              className="bg-background border-1 border-default-200"
            >
              <DropdownTrigger className="!outline-none">
                <Button
                  isIconOnly
                  radius="none"
                  className="rounded-bl-3xl outline-none"
                  size="lg"
                  variant="light"
                >
                  <FaEllipsisVertical size={18} className="text-white" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="action room"
                onAction={(key) => setKey(key.valueOf() as string)}
              >
                <DropdownItem key={"block"}>Bloquer</DropdownItem>
                <DropdownItem key={"edit"}>Modifier</DropdownItem>
                <DropdownItem key={"delete"}>Supprimer</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className="uppercase text-reddish-orange-500 font-semibold text-lg">
            {room.category.title}
          </h1>
          <h2 className="text-reddish-orange-500 font-medium text-lg">
            {room.title}
          </h2>
          <h3>
            <span className="text-white-gray-500 font-extrabold text-xl">
              {room.price} MGA
            </span>
            <span>/Nuit</span>
          </h3>
          <div className="flex items-center gap-2">
            {getCategoryType(room.category.type).icon}
            <p className="text-medium font-base font-medium text-white-gray-500">
              {getCategoryType(room.category.type).text}
            </p>
          </div>
          <div className="flex items-center gap-2 text-white-gray-500">
            <div className="flex items-center gap-2">
              <FaUserGroup size={18} />
              <p className="text-reddish-orange-500">{room.category.pax}</p>
              <p className="text-medium font-base font-medium">Pax</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineBed size={18} />
              <p className="text-reddish-orange-500">{room.category.bigBed}</p>
              <p className="text-medium font-base font-medium">
                Grand(s) lit(s)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineBed size={18} />
              <p className="text-reddish-orange-500">
                {room.category.smallBed}
              </p>
              <p className="text-medium font-base font-medium">
                Petit(s) lit(s)
              </p>
            </div>
          </div>
        </div>
      </div>
      <DeleteRoom
        room={room}
        isOpen={key === "delete"}
        onOpenChange={() => setKey("")}
      />
    </>
  );
};

export default RoomCard;
