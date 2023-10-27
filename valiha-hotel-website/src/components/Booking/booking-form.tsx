import { useBookingForm } from "@/hooks/reservation";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import ReactDatePicker from "react-datepicker";
import { FaCalendarDays, FaHotel, FaPlus, FaTrash } from "react-icons/fa6";
import { If, Then } from "react-if";
import Mastercard from "../Icons/MasterCard";

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
        <h1 className="text-xl font-semibold text-center pt-4 pb-8">
          {t("reservation.booking.title")}
        </h1>
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
                  selected={breakfast.date}
                  onChange={(date: Date) =>
                    formik.setFieldValue(`breakfasts.data.${index}.date`, date)
                  }
                  wrapperClassName="w-1/3"
                  customInput={
                    <Input
                      onChange={formik.handleChange}
                      label={t("reservation.booking.breakfast.date")}
                      variant="bordered"
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
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <Select
                      name={`shuttles.data.${index}.selection`}
                      variant="bordered"
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
                  <Button
                    isIconOnly
                    color="danger"
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
                onClick={addShuttle}
              >
                <FaPlus />
              </Button>
            </div>
          </Then>
        </If>
        <div>
          <h1 className="text-lg py-2">Mode de paiement</h1>
          <div className="flex items-center gap-2 mb-2">
            <div
              className={`flex flex-col items-center justify-center border-2 border-solid p-2 h-24 w-36 ${
                formik.values.payment.selection === "mastercard"
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() =>
                formik.setFieldValue("payment.selection", "mastercard")
              }
            >
              <Mastercard />
              <p className="text-center">Via Mastercard</p>
            </div>
            <div
              className={`flex flex-col items-center justify-center border-2 border-solid p-2 h-24 w-36 ${
                formik.values.payment.selection === "on_spot"
                  ? "border-blue-500"
                  : "border-gray-200"
              }`}
              onClick={() =>
                formik.setFieldValue("payment.selection", "on_spot")
              }
            >
              <div className="flex items-center flex-grow">
                <FaHotel size={24} />
              </div>
              <p className="self-center">Sur place</p>
            </div>
          </div>
          <If condition={formik.values.payment.selection === "mastercard"}>
            <Then>
              <Input
                name="payment.card"
                onChange={formik.handleChange}
                label={t("reservation.booking.payment.card_number")}
                variant="bordered"
                className="w-full flex basis-1/2"
              />
            </Then>
          </If>
        </div>
        <button className="btn btn-orange w-fit self-end" type="submit">
          {t("reservation.booking.button")}
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
