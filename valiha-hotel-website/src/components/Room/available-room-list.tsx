import { Room } from "@/domain/entities/room";
import { BsBookmarkCheckFill } from "react-icons/bs";
import AvailableRoomCard from "./available-room";
import { useState } from "react";
import { If, Then } from "react-if";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hooks/store";

type Props = {
  rooms: Room[];
};

const AvailableRoomList = ({ rooms }: Props) => {
  const router = useRouter();
  const booking = useAppSelector((state) => state.booking);

  const proceedBooking = () => {
    router.push({
      pathname: "/rooms/booking",
    });
  };

  return (
    <div className="flex items-center justify-between content-between gap-8 flex-wrap relative">
      {rooms.map((room) => (
        <AvailableRoomCard
          key={room.id}
          room={room}
        />
      ))}
      <If condition={booking.rooms.length > 0}>
        <Then>
          <div
            className="fixed bottom-12 ease-in right-4 transition-all cursor-pointer bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full"
            onClick={proceedBooking}
          >
            <BsBookmarkCheckFill size={24} />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-reddish-orange-500 border-none rounded-full -top-2 right-0">
              {booking.rooms.length}
            </div>
          </div>
        </Then>
      </If>
    </div>
  );
};

export default AvailableRoomList;
