import { Room } from "@/domain/entities/room";
import { BsBookmarkCheckFill } from "react-icons/bs";
import AvailableRoomCard from "./available-room";
import { useState } from "react";
import { If, Then } from "react-if";
import { useRouter } from "next/router";

type Props = {
  rooms: Room[];
};

const AvailableRoomList = ({ rooms }: Props) => {
  const [bookedRooms, setBookedRooms] = useState<string[]>([]);
  const router = useRouter();

  const handleBooking = (roomId: string) => {
    if (bookedRooms.includes(roomId)) {
      setBookedRooms(
        bookedRooms.filter((selectedItem) => selectedItem !== roomId)
      );
    } else {
      setBookedRooms([...bookedRooms, roomId]);
    }
  };

  const proceedBooking = () => {
    router.push({
      pathname: "/rooms/booking",
      query: {
        ids: bookedRooms,
        checkIn: router.query.checkIn,
        checkOut: router.query.checkOut
      },
    });
  };

  return (
    <div className="flex items-center justify-between content-between gap-8 flex-wrap relative">
      {rooms.map((room) => (
        <AvailableRoomCard
          key={room.id}
          room={room}
          handleBooking={handleBooking}
        />
      ))}
      <If condition={bookedRooms.length > 0}>
        <Then>
          <div
            className="fixed bottom-12 ease-in right-4 transition-all cursor-pointer bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full"
            onClick={proceedBooking}
          >
            <BsBookmarkCheckFill size={24} />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-reddish-orange-500 border-none rounded-full -top-2 right-0">
              {bookedRooms.length}
            </div>
          </div>
        </Then>
      </If>
    </div>
  );
};

export default AvailableRoomList;
