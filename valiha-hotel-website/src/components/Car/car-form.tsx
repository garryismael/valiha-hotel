import { LocationRequest } from "@/domain/use-cases/location";
import { Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import React from "react";
import ReactDatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";

const CarLocation = () => {
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
    <div className="flex flex-col px-2 py-5 shadow-lg justify-center flex-wrap gap-2 w-3/4 mx-auto">
      <div className="flex items-center justify-between gap-4">
        <Input
          name="client.firstName"
          onChange={formik.handleChange}
          label={t("reservation.booking.first_name")}
          variant="bordered"
          className="w-full"
        />
        <Input
          name="client.lastName"
          onChange={formik.handleChange}
          label={t("reservation.booking.last_name")}
          variant="bordered"
          className="w-full"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Input
          name="client.phoneNumber"
          onChange={formik.handleChange}
          label={t("reservation.booking.phone_number")}
          variant="bordered"
          className="w-full"
        />
        <Input
          name="client.email"
          onChange={formik.handleChange}
          label={t("reservation.booking.email")}
          variant="bordered"
          className="w-full"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <ReactDatePicker
          selected={formik.values.start}
          onChange={(date: Date) => formik.setFieldValue("start", date)}
          dateFormat="dd/MM/yyyy"
          className="w-full"
          wrapperClassName="w-full"
          customInput={
            <Input
              onChange={formik.handleChange}
              label={t("reservation.booking.shuttle.date")}
              variant="bordered"
              className="w-1/2"
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
              label={t("reservation.booking.shuttle.date")}
              variant="bordered"
              className="w-1/2"
              startContent={<FaCalendarDays />}
            />
          }
        />
      </div>
    </div>
  );
};

export default CarLocation;
