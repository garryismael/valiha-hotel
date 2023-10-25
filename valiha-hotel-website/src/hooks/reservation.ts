import {
  BreakfastRequestDto,
  ShuttleRequestDto,
} from "@/domain/use-cases/reservation";
import { useFormik } from "formik";
import { useAppSelector } from "./store";
import { ClientRequestDto } from "@/domain/use-cases/contact";


type ShuttleForm = {
  flightName: string;
  flightNumber: string;
  destination: string;
  selection: string;
  date: Date;
};

type ReservationForm = {
  checkIn: Date;
  checkOut: Date;
  parking: boolean;
  client: ClientRequestDto;
  shuttles: {
    checked: boolean;
    data: ShuttleForm[]
  };
  breakfasts: {
    checked: boolean;
    data: BreakfastRequestDto[];
  };
};

export const useBookingForm = () => {
  const booking = useAppSelector((state) => state.booking);
  const formik = useFormik<ReservationForm>({
    initialValues: {
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      parking: false,
      client: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
      },
      breakfasts: {
        checked: false,
        data: [],
      },
      shuttles: {
        checked: false,
        data: [],
      },
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  const handleCheckBreakfast = (checked: boolean) => {
    if (checked) {
      formik.setFieldValue("breakfasts.data", [{ date: booking.checkIn }]);
    } else {
      formik.setFieldValue("breakfasts.data", []);
    }
    formik.setFieldValue("breakfasts.checked", checked);
  };

  const handleCheckShuttle = (checked: boolean) => {
    if (checked) {
      formik.setFieldValue("parking", false);
      formik.setFieldValue("shuttles.data", [
        {
          date: booking.checkIn,
          destination: "",
          selection: "",
          flightName: "",
          flightNumber: "",
        },
      ]);
    } else {
      formik.setFieldValue("shuttles.data", []);
    }

    formik.setFieldValue("shuttles.checked", checked);
  };

  const addBreakfast = () => {
    const fieldValue = formik.values.breakfasts;
    const updatedBreakfasts = [
      ...fieldValue.data,
      {
        date: booking.checkIn,
      },
    ];
    formik.setFieldValue("breakfasts.data", updatedBreakfasts);
  };

  const deleteBreakfast = (index: number) => {
    const breakfasts = formik.values.breakfasts.data.filter(
      (_, i) => i !== index
    );
    formik.setFieldValue("breakfasts.data", breakfasts);
  };

  const addShuttle = () => {
    const shuttles = formik.values.shuttles;
    const updatedShuttles = [
      ...shuttles.data,
      {
        date: booking.checkIn,
        destination: "",
        selection: "",
        flightName: "",
        flightNumber: "",
      },
    ];
    formik.setFieldValue("shuttles.data", updatedShuttles);
  };

  const deleteShuttle = (index: number) => {
    const shuttles = formik.values.shuttles.data.filter((_, i) => i !== index);
    formik.setFieldValue("shuttles.data", shuttles);
  };

  const handleDestinationChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    formik.handleChange(e);
    let value = e.target.value;
    if (value === "other") {
      value = "";
    }
    formik.setFieldValue(`shuttles.data.${index}.destination`, value);
  };

  return {
    formik,
    handleCheckBreakfast,
    handleCheckShuttle,
    addBreakfast,
    deleteBreakfast,
    addShuttle,
    deleteShuttle,
    handleDestinationChange,
  };
};
