"use client";

import { Car } from "@/domain/entities/car";
import styles from "@/styles/car.module.css";
import Image from "next/image";
import Link from "next/link";

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
        <p className="uppercase text-reddish-orange-500 font-semibold text-lg">
          {car.mark}
        </p>
        <h1>
          Possibilités routières : routes principales et quelques hors route
        </h1>
        <p>
          <span>Entraînement: </span> <span>{car.training} roues motrices</span>
        </p>
        <p>
          <span>Kilométrage: </span>{" "}
          <span>{car.mileage} litres aux 100 km</span>
        </p>
        <p>
          <span>Portes</span>: <span>{car.door} </span>
        </p>
        <p>
          <span>Places</span>: <span>{car.place}</span>
        </p>
        <p>
          <span>Modèle / Année</span>: <span>{car.year}</span>
        </p>
        <p>
          <span>Prix par jour: </span>: <span>{car.price} MGA </span>
        </p>
        <p>Chauffeur: inclus</p>
        <Link href="/locations" className="py-6 self-center justify-center">
          <span className="btn btn-orange w-fit">Louer Cette Voiture</span>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
