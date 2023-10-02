"use client";
import {
  Select,
  SelectItem
} from "@nextui-org/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarDays, FaHouse } from "react-icons/fa6";
import DropdownAvailability from "../DropdownAvailability";
import styles from "./index.module.scss";

const CheckAvailability = () => {
  const hotelTypes = ["hotel-with-kitchen", "hotel-without-breakfast"];
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <div className={styles.inputs}>
          <Select
            aria-label="Hotel Type"
            placeholder="Hotel Type"
            color="default"
            radius="none"
            startContent={<FaHouse size={24} />}
            classNames={{
              trigger: "!bg-transparent shadow-none",
              value: "text-xl"
            }}
          >
            {hotelTypes.map((hotelType) => (
              <SelectItem key={hotelType} value={hotelType} classNames={{
                base: "!text-xl",
                wrapper: "!text-xl",
                title: "!text-xl",
                description: "!text-xl"
              }}>
                {hotelType}
              </SelectItem>
            ))}
          </Select>
          <div className="flex items-center gap-3">
            <FaCalendarDays size={24} />
            <DatePicker
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setStartDate(date)}
              className="text-xl outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarDays size={24} />
            <DatePicker
              selected={startDate}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setStartDate(date)}
              className="text-xl outline-none bg"
            />
          </div>
          <DropdownAvailability />
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
