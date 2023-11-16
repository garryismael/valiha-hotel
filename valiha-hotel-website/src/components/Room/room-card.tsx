import { Room } from "@/domain/entities/room";
import styles from "@/styles/room.module.css";
import { getCategoryType } from "@/utils/category";
import Image from "next/image";
import { FaBed, FaUserGroup } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Button } from "@nextui-org/react";

type Props = {
  room: Room;
};

const RoomCard = ({ room }: Props) => {
  const { t } = useTranslation();
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
        <h1 className="uppercase text-reddish-orange-500 font-semibold text-xl">
          {room.category.title}
        </h1>
        <h2 className="text-reddish-orange-500 font-medium text-xl">
          {room.title}
        </h2>
        <h3>
          <span className="text-dark-1-500 font-extrabold text-xl text-reddish-orange-500">
            {room.price} MGA
          </span>
          <span className="text-lg font-extrabold">/Nuit</span>
        </h3>
        <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default RoomCard;
