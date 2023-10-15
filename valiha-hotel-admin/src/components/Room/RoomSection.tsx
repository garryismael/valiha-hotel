"use client";

import { roomBreadcrumbs } from "@/constants/room";
import { Room } from "@/domain/entities/room";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { InfoIcon } from "@/icons/accounts/info-icon";
import { TrashIcon } from "@/icons/accounts/trash-icon";
import { SettingsIcon } from "@/icons/sidebar/settings-icon";
import { Input } from "@nextui-org/react";
import Breadcrumbs from "../BreadCrumbs";
import RoomCard from "./RoomCard";
import AddRoom from "./add-room";

type Props = {
  rooms: Room[];
};

const RoomSection = ({ rooms }: Props) => {
  return (
    <section className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={roomBreadcrumbs} />
      <h3 className="title">Rooms</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search users"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddRoom />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full flex items-center justify-between content-between gap-8 flex-wrap">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default RoomSection;
