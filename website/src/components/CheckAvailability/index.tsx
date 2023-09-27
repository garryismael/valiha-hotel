"use client";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import styles from './index.module.scss';


const CheckAvailability = () => {
  const hotelTypes = ["hotel-with-kitchen", "hotel-without-breakfast"];
  return (
    <form className="flex items-center justify-between gap-2 py-12 px-6 shadow-xl my-6 rounded-lg relative">
      <Select
        labelPlacement="outside"
        label="Hotel Type"
        placeholder="Hotel Type"
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
      />
      <Input
        type="date"
        label="Check Out"
        placeholder="Check Out Date"
        labelPlacement="outside"
        className="py-2"
      />
      <Button color="warning" className="w-full self-end">
        Voir disponibilités
      </Button>
    </form>
  );
};

export default CheckAvailability;
