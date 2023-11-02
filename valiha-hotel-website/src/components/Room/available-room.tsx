import { Room } from "@/domain/entities/room";
import { useAppDispatch } from "@/hooks/store";
import {
  addRoom,
  removeRoom,
} from "@/infrastructure/store/slices/booking-slice";
import styles from "@/styles/room.module.css";
import { getCategoryType } from "@/utils/category";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";
import { FaBed, FaPlus, FaUserGroup, FaXmark } from "react-icons/fa6";
import { Else, If, Then } from "react-if";

const AvailableRoomCard = ({ room }: { room: Room }) => {
  const [selected, setSelected] = useState<boolean>(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleAddRoom = () => {
    dispatch(addRoom(room));
    setSelected(!selected);
  };

  const handleRemoveRoom = () => {
    dispatch(removeRoom(room));
    setSelected(!selected);
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.card__image}>
        <Image
          src={room.image}
          alt={room.title}
          fill={true}
          sizes="100%"
          className={styles.image}
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <h1 className="uppercase text-reddish-orange-500 font-semibold text-lg">
          {room.category.title}
        </h1>
        <h2 className="text-reddish-orange-500 font-medium text-lg">
          {room.title}
        </h2>
        <h3>
          <span className="text-dark-1-500 font-extrabold text-xl">
            {room.price} MGA
          </span>
          <span>/Nuit</span>
        </h3>
        <div className="flex items-center gap-2">
          {getCategoryType(room.category.type).icon}
          <p className="text-medium font-base font-medium">
            {t(`room.${room.category.type}`)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <FaUserGroup size={16} />
            <p className="text-reddish-orange-500">{room.category.pax}</p>
            <p className="text-medium font-base font-medium">{t("pax")}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaBed size={16} />
            <p className="text-reddish-orange-500">{room.category.bigBed}</p>
            <p className="text-medium font-base font-medium">
              {t("room.big_bed")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaBed size={16} />
            <p className="text-reddish-orange-500">{room.category.smallBed}</p>
            <p className="text-medium font-base font-medium">
              {t("room.small_bed")}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 p-2">
          <If condition={!selected}>
            <Then>
              <div
                className="flex items-center justify-center w-12 h-12 bg-blue-400 hover:scale-105 text-white rounded-full cursor-pointer transition-transform ease-out delay-300 scale-100"
                onClick={handleAddRoom}
              >
                <FaPlus size={24} />
              </div>
            </Then>
            <Else>
              <div
                className="flex items-center justify-center w-12 h-12 bg-red-400 hover:scale-105 text-white rounded-full cursor-pointer transition-transform ease-out delay-300 scale-100"
                onClick={handleRemoveRoom}
              >
                <FaXmark size={24} />
              </div>
            </Else>
          </If>
        </div>
      </div>
    </div>
  );
};

export default AvailableRoomCard;
