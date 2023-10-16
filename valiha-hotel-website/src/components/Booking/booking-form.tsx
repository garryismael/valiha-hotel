import { useBookingForm } from "@/hooks/reservation";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import React, { forwardRef } from "react";
import ReactDatePicker from "react-datepicker";
import { FaCalendarDays, FaPlus, FaXmark } from "react-icons/fa6";
import { If, Then } from "react-if";
import InputDate from "./date-input";

const BookingForm = () => {
  const {
    formik,
    useBreakfast,
    useShuttle,
    handleCheckBreakfast,
    handleCheckShuttle,
    addBreakfast,
    addShuttle,
  } = useBookingForm();

  return (
    <section className="w-full max-w-5xl shadow-lg mx-auto mt-12">
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
          isSelected={useBreakfast}
          onValueChange={handleCheckBreakfast}
        >
          Breakfast?
        </Checkbox>
        <If condition={!formik.values.parking && useBreakfast}>
          <Then>
            <div className="border-1 border-solid border-gray-200 flex items-center flex-wrap gap-4 content-between py-2 px-2">
              {formik.values.breakfasts.map((breakfast, index) => (
                <ReactDatePicker
                  selected={breakfast.date}
                  onChange={(date: Date) =>
                    formik.setFieldValue(`breakfasts.${index}`, date)
                  }
                  customInput={
                    <Input
                      onChange={formik.handleChange}
                      label="Check In"
                      variant="bordered"
                      className="w-full"
                      startContent={<FaCalendarDays />}
                      endContent={<FaXmark className="cursor-pointer" />}
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
        <Checkbox isSelected={useShuttle} onValueChange={handleCheckShuttle}>
          Shuttle?
        </Checkbox>
        <If condition={!formik.values.parking && useShuttle}>
          <Then>
            <div className="flex flex-col gap-4 content-between border-1 border-solid border-gray-200 p-2">
              {formik.values.shuttles.map((shuttle, index) => (
                <div key={index} className="border-1 border-solid border-gray-200 p-4 flex flex-col gap-2 content-between">
                  <div className="flex items-center justify-between gap-4">
                    <Input
                      name="client.firstName"
                      onChange={formik.handleChange}
                      label="Flight Name"
                      variant="bordered"
                      className="w-full"
                    />
                    <Input
                      name={`shuttle.${index}.flightName`}
                      onChange={formik.handleChange}
                      label="Email"
                      variant="bordered"
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <Select variant="bordered" label="Destination">
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
                        airport to hotel
                      </SelectItem>
                      <SelectItem key="other" value="other">
                        other
                      </SelectItem>
                    </Select>
                    <Input
                      name={`shuttle.${index}.flightName`}
                      onChange={formik.handleChange}
                      label="Email"
                      variant="bordered"
                      className="w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <ReactDatePicker
                      selected={shuttle.date}
                      onChange={(date: Date) =>
                        formik.setFieldValue(`shuttles.${index}`, date)
                      }
                      className="w-full"
                      showTimeSelect
                      timeFormat="HH:mm"
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
                    <Input
                      name="destination"
                      onChange={formik.handleChange}
                      label="Destination"
                      variant="bordered"
                      className="w-full"
                    />
                  </div>
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
