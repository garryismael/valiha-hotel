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
    onSubmit() {
      btnRef.current?.click();
    },
  });
  return (
    <>
      <section className="shadow-lg w-2/3 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col p-8 justify-center flex-wrap gap-2">
            <div className="flex items-center justify-between gap-4">
              <Input
                size="lg"
                name="client.lastName"
                onChange={formik.handleChange}
                label={t("reservation.booking.last_name")}
                variant="bordered"
                className="w-full"
                radius="sm"
              />
              <Input
                size="lg"
                name="client.firstName"
                onChange={formik.handleChange}
                label={t("reservation.booking.first_name")}
                variant="bordered"
                className="w-full"
                radius="sm"
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
              />
              <Input
                size="lg"
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
              size="lg"
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
                label: "z-1 text-medium",
              }}
              radius="sm"
              size="lg"
              onChange={formik.handleChange}
            />
            <Button
              type="submit"
              className="bg-reddish-orange-500 w-fit text-white self-center"
              radius="sm"
              size="lg"
            >
              Procéder
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
