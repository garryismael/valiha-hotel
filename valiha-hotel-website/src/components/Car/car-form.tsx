"use client";
import { LocationRequest } from "@/domain/use-cases/location";
import { CarProps } from "@/pages/locations";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import React from "react";
import ReactDatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";

const CarLocation = (props: CarProps) => {
  const { t } = useTranslation();
  const formik = useFormik<LocationRequest>({
    initialValues: {
      client: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      carId: "",
      destination: "",
      reason: "",
      end: new Date(),
      start: new Date(),
    },
    onSubmit: (values: LocationRequest) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="flex flex-col p-8 shadow-lg justify-center flex-wrap gap-2 w-2/3 mx-auto">
        <div className="flex items-center justify-between gap-4">
          <Input
            name="client.firstName"
            onChange={formik.handleChange}
            label={t("reservation.booking.first_name")}
            variant="bordered"
            className="w-full"
            radius="sm"
          />
          <Input
            name="client.lastName"
            onChange={formik.handleChange}
            label={t("reservation.booking.last_name")}
            variant="bordered"
            className="w-full"
            radius="sm"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Input
            name="client.phoneNumber"
            onChange={formik.handleChange}
            label={t("reservation.booking.phone_number")}
            variant="bordered"
            className="w-full"
            radius="sm"
          />
          <Input
            name="client.email"
            onChange={formik.handleChange}
            label={t("reservation.booking.email")}
            variant="bordered"
            className="w-full"
            radius="sm"
          />
        </div>
        <div className="relative flex items-center justify-between gap-4">
          <ReactDatePicker
            selected={formik.values.start}
            onChange={(date: Date) => formik.setFieldValue("start", date)}
            dateFormat="dd/MM/yyyy"
            className="w-full "
            wrapperClassName="w-full"
            customInput={
              <Input
                onChange={formik.handleChange}
                label="Début de location"
                variant="bordered"
                className="w-1/2"
                radius="sm"
                startContent={<FaCalendarDays />}
              />
            }
          />
          <ReactDatePicker
            selected={formik.values.end}
            onChange={(date: Date) => formik.setFieldValue("end", date)}
            dateFormat="dd/MM/yyyy"
            className="w-full"
            wrapperClassName="w-full"
            customInput={
              <Input
                onChange={formik.handleChange}
                label="Fin de location"
                variant="bordered"
                className="w-1/2"
                radius="sm"
                startContent={<FaCalendarDays />}
              />
            }
          />
        </div>
        <Select
          name="destination"
          variant="bordered"
          label="Destination"
          value={formik.values.destination}
          onChange={formik.handleChange}
          classNames={{
            label: "z-1",
          }}
          radius="sm"
        >
          <SelectItem key="Antananarivo" value="Antananarivo">
            Antananarivo
          </SelectItem>
          <SelectItem key="hotel-to-airport" value="hotel-to-airport">
            Hors Antananarivo
          </SelectItem>
        </Select>
        <Textarea
          name="reason"
          label="Raison du trajet"
          variant="bordered"
          classNames={{
            label: "z-1",
          }}
          radius="sm"
        />
        <Button
          type="submit"
          className="bg-reddish-orange-500 w-fit text-white"
          radius="sm"
          size="lg"
        >
          Confirmer la location
        </Button>
      </div>
    </>
  );
};

export default CarLocation;
