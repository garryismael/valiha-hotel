"use client";

import { Room } from "@/core/entities/models/Room";
import RoomCard from "../RoomCard";

type Props = {
  rooms: Room[];
};

const RoomList = ({ rooms }: Props) => {
  return (
    <>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </>
  );
};

export default RoomList;
