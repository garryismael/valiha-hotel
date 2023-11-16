"use client";

import { Car } from "@/domain/entities/car";
import styles from "@/styles/car.module.css";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaEllipsisVertical, FaTrash } from "react-icons/fa6";

type Props = {
  car: Car;
};

const CarCard = ({ car }: Props) => {
  const [key, setKey] = useState("");
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
        <div className="actions">
            <Dropdown
              radius="sm"
              className="bg-background border-1 border-default-200"
            >
              <DropdownTrigger className="!outline-none">
                <Button
                  isIconOnly
                  radius="none"
                  className="rounded-bl-3xl outline-none hover:bg-reddish-orange-600"
                  size="lg"
                  variant="light"
                >
                  <FaEllipsisVertical size={18} className="text-white" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="action car"
                onAction={(key) => setKey(key.valueOf() as string)}
              >
                <DropdownItem
                  key={"edit"}
                  color="primary"
                  className="text-primary-500 !outline-none"
                  startContent={<FaEdit size={16} />}
                >
                  Modifier
                </DropdownItem>
                <DropdownItem
                  color="danger"
                  className="text-danger !outline-none"
                  key={"delete"}
                  startContent={<FaTrash size={16} />}
                >
                  Supprimer
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <p className="uppercase text-reddish-orange-500 font-semibold text-lg">
          {car.mark}
        </p>
        <p className="text-base font-semibold">
          {car.price} MGA/jour
        </p>
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
      </div>
    </div>
  );
};

export default CarCard;
