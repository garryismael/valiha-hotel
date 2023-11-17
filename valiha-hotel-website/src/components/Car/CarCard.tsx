"use client";

import { Car } from "@/domain/entities/car";
import styles from "@/styles/car.module.css";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  const {t} = useTranslation();
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
          {t("car_possibility")}
        </h1>
        <p>
          <span>{t("training")}: </span> <span>{car.training} {t("motrice")}</span>
        </p>
        <p>
          <span>{t("kilometrage")}: </span>{" "}
          <span>{car.mileage} {t("litre_100")}</span>
        </p>
        <p>
          <span>{t("portes")}</span>: <span>{car.door} </span>
        </p>
        <p>
          <span>{t("places")}</span>: <span>{car.place}</span>
        </p>
        <p>
          <span>{t("model")} / {t("year")}</span>: <span>{car.year}</span>
        </p>
        <p>
          <span>{t("per_day")}: </span>: <span>{car.price} MGA </span>
        </p>
        <p>{t("chauffeur_inclut")}</p>
        <Link
          href={{
            pathname: "/locations",
            query: {
              id: car.id,
            },
          }}
          className="py-6 self-center justify-center"
        >
          <span className="btn btn-orange w-fit">{t("louer_voiture")}</span>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
