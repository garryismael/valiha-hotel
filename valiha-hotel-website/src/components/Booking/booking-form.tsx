import { useBookingForm } from "@/hooks/reservation";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import ReactDatePicker from "react-datepicker";
import { FaCalendarDays, FaPlus, FaTrash } from "react-icons/fa6";
import { If, Then } from "react-if";

const BookingForm = () => {
  const {
    formik,
    handleCheckBreakfast,
    handleCheckShuttle,
    addBreakfast,
    deleteBreakfast,
    addShuttle,
    deleteShuttle,
    handleDestinationChange,
  } = useBookingForm();
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-5xl shadow-md mx-auto mt-12">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 content-between"
      >
        <h1 className="text-3xl font-semibold text-center pt-4 pb-8">
          {t("reservation.booking.title")}
        </h1>
        <div className="flex items-center justify-between gap-4">
          <Input
            name="client.lastName"
            onChange={formik.handleChange}
            label={t("reservation.booking.last_name")}
            variant="bordered"
            className="w-full"
            radius="sm"
          />
          <Input
            name="client.firstName"
            onChange={formik.handleChange}
            label={t("reservation.booking.first_name")}
            variant="bordered"
            radius="sm"
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Input
            name="client.phoneNumber"
            onChange={formik.handleChange}
            label={t("reservation.booking.phone_number")}
            variant="bordered"
            radius="sm"
            className="w-full"
          />
          <Input
            name="client.email"
            onChange={formik.handleChange}
            label={t("reservation.booking.email")}
            variant="bordered"
            radius="sm"
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Input
            name="pax"
            onChange={formik.handleChange}
            label="Nombre de pax"
            variant="bordered"
            type="number"
            radius="sm"
            className="w-full"
          />
          <div className="w-full" />
        </div>
        <Checkbox
          name="parking"
          isSelected={formik.values.parking}
          onValueChange={(isSelected: boolean) => {
            if (isSelected) {
              formik.setFieldValue("shuttles.checked", false);
              formik.setFieldValue("shuttles.data", []);
            }
            formik.setFieldValue("parking", isSelected);
          }}
        >
          {t("reservation.booking.use_parking")}
        </Checkbox>
        <Checkbox
          isSelected={formik.values.breakfasts.checked}
          onValueChange={handleCheckBreakfast}
        >
          {t("reservation.booking.breakfast.title")}
        </Checkbox>
        <If condition={formik.values.breakfasts.data.length > 0}>
          <Then>
            <div className="border-1 border-solid border-gray-200 flex items-center flex-wrap gap-4 content-between py-2 px-2">
              {formik.values.breakfasts.data.map((breakfast, index) => (
                <ReactDatePicker
                  key={index}
                  selected={new Date()}
                  onChange={(date: Date) =>
                    formik.setFieldValue(`breakfasts.data.${index}.date`, date)
                  }
                  portalId={`breakfast-${index}`}
                  dateFormat="dd/MM/yyyy"
                  wrapperClassName="w-1/3"
                  customInput={
                    <Input
                      onChange={formik.handleChange}
                      label={t("reservation.booking.breakfast.date")}
                      variant="bordered"
                      radius="sm"
                      className="w-full"
                      startContent={<FaCalendarDays />}
                      endContent={
                        <FaTrash
                          className="cursor-pointer text-red-600"
                          onClick={() => deleteBreakfast(index)}
                        />
                      }
                    />
                  }
                />
              ))}
              <Button
                isIconOnly
                color="primary"
                variant="bordered"
                aria-label="Add"
                onClick={addBreakfast}
              >
                <FaPlus />
              </Button>
            </div>
          </Then>
        </If>
        <Checkbox
          isSelected={
            formik.values.parking
              ? false
              : formik.values.shuttles.data.length > 0
          }
          onValueChange={handleCheckShuttle}
        >
          {t("reservation.booking.shuttle.title")}
        </Checkbox>
        <If condition={formik.values.shuttles.data.length > 0}>
          <Then>
            <div className="flex flex-col gap-4 content-between border-1 border-solid border-gray-200 p-2">
              {formik.values.shuttles.data.map((shuttle, index) => (
                <div
                  key={index}
                  className="border-1 border-solid border-gray-200 p-4 flex flex-col gap-2 content-between"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Input
                      name={`shuttles.data.${index}.flightName`}
                      onChange={formik.handleChange}
                      label={t("reservation.booking.shuttle.name")}
                      value={shuttle.flightName}
                      variant="bordered"
                      radius="sm"
                      className="w-full"
                      classNames={{
                        label: "z-1",
                      }}
                    />
                    <Input
                      name={`shuttles.data.${index}.flightNumber`}
                      onChange={formik.handleChange}
                      label={t("reservation.booking.shuttle.number")}
                      variant="bordered"
                      radius="sm"
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <Select
                      name={`shuttles.data.${index}.selection`}
                      variant="bordered"
                      radius="sm"
                      label={t("reservation.booking.shuttle.destination.label")}
                      value={shuttle.destination}
                      onChange={(e) => handleDestinationChange(e, index)}
                      classNames={{
                        label: "z-1",
                      }}
                    >
                      <SelectItem
                        key="airport-to-hotel"
                        value="airport-to-hotel"
                      >
                        {t(
                          "reservation.booking.shuttle.destination.airport_to_hotel"
                        )}
                      </SelectItem>
                      <SelectItem
                        key="hotel-to-airport"
                        value="hotel-to-airport"
                      >
                        {t(
                          "reservation.booking.shuttle.destination.hotel_to_airport"
                        )}
                      </SelectItem>
                      <SelectItem key="other" value="other">
                        {t("reservation.booking.shuttle.destination.other")}
                      </SelectItem>
                    </Select>
                    <Input
                      name={`shuttles.data.${index}.destination`}
                      onChange={formik.handleChange}
                      value={shuttle.destination}
                      label={t("reservation.booking.shuttle.destination.label")}
                      variant="bordered"
                      radius="sm"
                      className={`w-full ${
                        shuttle.selection !== "other" ? "invisible" : "visible"
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <ReactDatePicker
                      selected={shuttle.date}
                      onChange={(date: Date) =>
                        formik.setFieldValue(
                          `shuttles.data.${index}.date`,
                          date
                        )
                      }
                      dateFormat="dd/MM/yyyy HH:mm"
                      className="w-full"
                      showTimeSelect
                      timeFormat="HH:mm"
                      wrapperClassName="w-full"
                      portalId={`shuttles-${index}`}
                      customInput={
                        <Input
                          onChange={formik.handleChange}
                          label={t("reservation.booking.shuttle.date")}
                          variant="bordered"
                          radius="sm"
                          className="w-1/2"
                          startContent={<FaCalendarDays />}
                        />
                      }
                    />
                  </div>
                  <Button
                    isIconOnly
                    color="danger"
                    radius="sm"
                    variant="light"
                    aria-label="add shuttle"
                    className="justify-self-end align-self-end"
                    onClick={() => deleteShuttle(index)}
                  >
                    <FaTrash />
                  </Button>
                </div>
              ))}
              <Button
                isIconOnly
                color="primary"
                variant="bordered"
                aria-label="Add"
                radius="sm"
                onClick={addShuttle}
              >
                <FaPlus />
              </Button>
            </div>
          </Then>
        </If>

        <button className="btn btn-orange w-fit self-start" type="submit">
          {t("reservation.booking.button")}
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
