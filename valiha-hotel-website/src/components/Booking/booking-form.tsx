import { useBookingForm } from "@/hooks/reservation";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import React from "react";
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

  return (
    <section className="w-full max-w-5xl shadow-md mx-auto mt-12">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-4 content-between"
      >
        <h1 className="text-xl font-semibold text-center pt-4 pb-8">
          Booking Info
        </h1>
        <div className="flex items-center justify-between gap-4">
          <Input
            name="firstName"
            onChange={formik.handleChange}
            label="First Name"
            variant="bordered"
            className="w-full"
          />
          <Input
            name="lastName"
            onChange={formik.handleChange}
            label="Last Name"
            variant="bordered"
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <Input
            name="phoneNumber"
            onChange={formik.handleChange}
            label="Phone Number"
            variant="bordered"
            className="w-full"
          />
          <Input
            name="email"
            onChange={formik.handleChange}
            label="Email"
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
          Use parking?
        </Checkbox>
        <Checkbox
          isSelected={formik.values.breakfasts.checked}
          onValueChange={handleCheckBreakfast}
        >
          Breakfast?
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
                      label="Check In"
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
          Shuttle?
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
                      label="Flight Name"
                      value={shuttle.flightName}
                      variant="bordered"
                      className="w-full"
                    />
                    <Input
                      name={`shuttles.data.${index}.flightNumber`}
                      onChange={formik.handleChange}
                      label="Flight Number"
                      variant="bordered"
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <Select
                      name={`shuttles.data.${index}.selection`}
                      variant="bordered"
                      label="Destination"
                      value={shuttle.destination}
                      onChange={(e) =>
                        handleDestinationChange(e, index)
                      }
                    >
                      <SelectItem
                        key="airport-to-hotel"
                        value="airport-to-hotel"
                      >
                        airport to hotel
                      </SelectItem>
                      <SelectItem
                        key="hotel-to-airport"
                        value="hotel-to-airport"
                      >
                        hotel to airport
                      </SelectItem>
                      <SelectItem key="other" value="other">
                        other
                      </SelectItem>
                    </Select>
                    <Input
                      name={`shuttles.data.${index}.destination`}
                      onChange={formik.handleChange}
                      value={shuttle.destination}
                      label="Destination"
                      variant="bordered"
                      className={`w-full ${
                        shuttle.selection !== "other"
                          ? "invisible"
                          : "visible"
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
                          label="Check In"
                          variant="bordered"
                          className="w-full"
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
        <button
          className="bg-reddish-orange-500 w-fit block self-end hover:bg-reddish-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Proceed
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
