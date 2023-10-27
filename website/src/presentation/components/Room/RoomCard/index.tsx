import Image from "next/image";
import { BiBath } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import styles from "./index.module.scss";
import Link from "next/link";
import { Room } from "@/core/entities/models/Room";

type Props = {
  room: Room;
};

export default function RoomCard({ room }: Props) {
  return (
    <div
      className={`shadow-xl rounded-lg inline-block w-[420px] max-sm:w-full`}
    >
      <div className={styles.card__image}>
        <Image
          src={room.image}
          alt="category room"
          fill={true}
          className={styles.room__image}
        />
      </div>
      <div className="pb-6 mt-5 ml-2">
        <h1 className={styles.room__category}>{room.category.title}</h1>
        <p>{room.title}</p>
        <p>{room.price}/Nuit</p>
      </div>
      <div></div>
      <p>{room.category.title}</p>
      <p>{room.category.bigBed}</p>
      <p>{room.category.smallBed}</p>
      <p>1 Salle de bain</p>
      <p>Detail de la chambre</p>
    </div>
  );
}
