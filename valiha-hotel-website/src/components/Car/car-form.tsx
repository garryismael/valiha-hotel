import { LocationRequest } from "@/domain/use-cases/location";
import { CarProps } from "@/pages/locations";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import React, { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import { FaCalendarDays } from "react-icons/fa6";
import ConfirmLocation from "./confirm-location";
import moment from "moment";
import { locationValidationSchema } from "@/utils/validators/location-schema";
import { isInvalid } from "@/utils/input";
import InputErrorMessage from "../ErrorMessage";

const CarLocation = (props: CarProps) => {
  const { t } = useTranslation();
  const today = moment(new Date()).toDate();
  const btnRef = useRef<HTMLButtonElement>(null);
  const formik = useFormik<LocationRequest>({
    initialValues: {
      client: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
      carId: props.car.id,
      destination: "",
      reason: "",
      start: today,
      end: moment(today).add(1, "days").toDate(),
    },
    validationSchema: locationValidationSchema,
    onSubmit() {
      btnRef.current?.click();
    },
  });
  return (
    <>
      <section className="shadow-lg w-2/3 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col p-8 justify-center flex-wrap gap-2">
            <div className="flex items-center justify-between gap-4 my-6">
              <Input
                size="lg"
                name="client.lastName"
                onChange={formik.handleChange}
                label={t("reservation.booking.last_name")}
                variant="bordered"
                className="w-full"
                radius="sm"
                isInvalid={isInvalid(formik, "client.lastName")}
                errorMessage={
                  <InputErrorMessage name="client.lastName" formik={formik} />
                }
              />
              <Input
                size="lg"
                name="client.firstName"
                onChange={formik.handleChange}
                label={t("reservation.booking.first_name")}
                variant="bordered"
                className="w-full"
                radius="sm"
                isInvalid={isInvalid(formik, "client.firstName")}
                errorMessage={
                  <InputErrorMessage name="client.firstName" formik={formik} />
                }
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <Input
                size="lg"
                name="client.phoneNumber"
                onChange={formik.handleChange}
                label={t("reservation.booking.phone_number")}
                variant="bordered"
                className="w-full"
                radius="sm"
                isInvalid={isInvalid(formik, "client.phoneNumber")}
                errorMessage={
                  <InputErrorMessage
                    name="client.phoneNumber"
                    formik={formik}
                  />
                }
              />
              <Input
                size="lg"
                name="client.email"
                onChange={formik.handleChange}
                label={t("reservation.booking.email")}
                variant="bordered"
                className="w-full"
                radius="sm"
                isInvalid={isInvalid(formik, "client.email")}
                errorMessage={
                  <InputErrorMessage name="client.email" formik={formik} />
                }
              />
            </div>
            <div className="relative flex items-center justify-between gap-4">
              <ReactDatePicker
                selected={formik.values.start}
                minDate={today}
                onChange={(date: Date) => formik.setFieldValue("start", date)}
                dateFormat="dd/MM/yyyy"
                portalId="start"
                className="w-full "
                wrapperClassName="w-full"
                customInput={
                  <Input
                    size="lg"
                    onChange={formik.handleChange}
                    label={t("start_location")}
                    variant="bordered"
                    className="w-1/2"
                    radius="sm"
                    startContent={<FaCalendarDays />}
                    isInvalid={isInvalid(formik, "start")}
                    errorMessage={
                      <InputErrorMessage name="start" formik={formik} />
                    }
                  />
                }
              />
              <ReactDatePicker
                selected={formik.values.end}
                minDate={formik.values.start}
                onChange={(date: Date) => formik.setFieldValue("end", date)}
                dateFormat="dd/MM/yyyy"
                portalId="end"
                className="w-full"
                wrapperClassName="w-full"
                customInput={
                  <Input
                    size="lg"
                    onChange={formik.handleChange}
                    label={t("end_location")}
                    variant="bordered"
                    className="w-1/2"
                    radius="sm"
                    startContent={<FaCalendarDays />}
                    isInvalid={isInvalid(formik, "end")}
                    errorMessage={
                      <InputErrorMessage name="end" formik={formik} />
                    }
                  />
                }
              />
            </div>
            <Select
              name="destination"
              variant="bordered"
              label={t("destination")}
              value={formik.values.destination}
              onChange={formik.handleChange}
              classNames={{
                label: "z-1",
              }}
              radius="sm"
              size="lg"
              isInvalid={isInvalid(formik, "destination")}
              errorMessage={
                <InputErrorMessage name="destination" formik={formik} />
              }
            >
              <SelectItem key="Antananarivo" value="Antananarivo">
                {t("at_antananarivo")}
              </SelectItem>
              <SelectItem key="hotel-to-airport" value="hotel-to-airport">
                {t("hors_antananarivo")}
              </SelectItem>
            </Select>
            <Textarea
              name="reason"
              label={t("travel_reason")}
              variant="bordered"
              classNames={{
                label: "z-1 text-medium",
              }}
              radius="sm"
              size="lg"
              onChange={formik.handleChange}
              isInvalid={isInvalid(formik, "reason")}
              errorMessage={
                <InputErrorMessage name="reason" formik={formik} />
              }
            />
            <Button
              type="submit"
              className="bg-reddish-orange-500 w-fit text-white self-center"
              radius="sm"
              size="lg"
            >
              {t("proceed")}
            </Button>
          </div>
        </form>
      </section>
      <ConfirmLocation
        car={props.car}
        request={formik.values}
        btnRef={btnRef}
      />
    </>
  );
};

export default CarLocation;
