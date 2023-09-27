"use client";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { FaCalendarCheck, FaHouse } from "react-icons/fa6";
import styles from "./index.module.scss";
import ReactDatepicker from "react-datepicker";
import { useState } from "react";


const CheckAvailability = () => {
  const hotelTypes = ["hotel-with-kitchen", "hotel-without-breakfast"];
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-10/12 pl-16">
          <Select
            labelPlacement="outside"
            label="Hotel Type"
            placeholder="Hotel Type"
            radius="none"
            startContent={<FaHouse />}
          >
            {hotelTypes.map((hotelType) => (
              <SelectItem key={hotelType} value={hotelType}>
                {hotelType}
              </SelectItem>
            ))}
          </Select>
          <Input
            type="date"
            label="Check In"
            placeholder="Check In Date"
            labelPlacement="outside"
            className={styles.input}
            radius="none"
            color="default"
            classNames={{input: "bg-red-200"}}
            startContent={
              <FaCalendarCheck/>
            }
          />
          
          <Input
            type="date"
            label="Check Out"
            placeholder="Check Out Date"
            labelPlacement="outside"
            className="py-2"
            radius="none"
            startContent={
              <FaCalendarCheck/>
            }
          />
        </div>
        <button
          type="button"
          className="bg-dark-muted-500 hover:bg-reddish-orange-500 py-16 w-1/6 rounded-r-full text-white"
        >
          Voir disponibilités
        </button>
      </div>
    </form>
  );
};

export default CheckAvailability;
