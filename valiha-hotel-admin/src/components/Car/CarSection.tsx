import { Car } from "@/domain/entities/car";
import React from "react";

type Props = {
  cars: Car[];
};

const CarSection = ({ cars }: Props) => {
  return <div>{cars.length}</div>;
};

export default CarSection;
