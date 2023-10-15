"use client";

import { Car } from "@/domain/entities/car";
import styles from "@/styles/car.module.css";
import Image from "next/image";

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card__image}>
        <Image
          src={car.image}
          alt={car.mark}
          fill={true}
          sizes="100%"
          className={styles.image}
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <h1 className="uppercase text-reddish-orange-500 font-semibold text-lg">
          {car.mark}
        </h1>
        <h1 className="font-semibold text-lg">
          <span>{car.mileage}</span> <span>liters per 100 km</span>
        </h1>
        <h1>
          <span>{car.place}</span> {" "}
          <span>places</span>
        </h1>
      </div>
    </div>
  );
};

export default CarCard;
