import { Room } from "@/domain/entities/room";
import RoomCard from "./room-card";

type Props = {
  rooms: Room[];
};

const RoomList = ({ rooms }: Props) => {
  return (
    <div className="flex items-center justify-between content-between gap-8 flex-wrap">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomList;
