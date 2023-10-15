"use client";
import { roomBreadcrumbs } from "@/constants/room";
import { Car } from "@/domain/entities/car";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { InfoIcon } from "@/icons/accounts/info-icon";
import { TrashIcon } from "@/icons/accounts/trash-icon";
import { SettingsIcon } from "@/icons/sidebar/settings-icon";
import { Input } from "@nextui-org/react";
import Breadcrumbs from "../BreadCrumbs";
import CarCard from "./CarCard";
import AddCar from "./add-car";

type Props = {
  cars: Car[];
};

const CarSection = ({ cars }: Props) => {
  return (
    <section className="my-14 max-w-[95rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={roomBreadcrumbs} />
      <h3 className="title">Rooms</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Search users"
          />
          <SettingsIcon />
          <TrashIcon />
          <InfoIcon />
          <DotsIcon />
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddCar />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full flex items-center justify-between content-between gap-8 flex-wrap">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarSection;
