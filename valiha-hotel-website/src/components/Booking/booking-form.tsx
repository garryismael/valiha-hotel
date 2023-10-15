import { useBookingForm } from "@/hooks/reservation";
import BookingStepper from "./booking-stepper";

const BookingForm = () => {
  const { formik } = useBookingForm();
  return (
    <section className="w-full max-w-4xl shadow-lg mx-auto mt-12">
      <BookingStepper />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <h1 className="text-xl font-semibold text-center pt-4 pb-8">
          Booking Info
        </h1>
        <div className="flex items-center justify-between gap-4">
          <div className="input-group">
            <label htmlFor="client.firstName">First Name</label>
            <input
              type="text"
              name="client.firstName"
              onChange={formik.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="client.lastName">Last Name</label>
            <input
              type="text"
              name="client.lastName"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="input-group">
            <label htmlFor="client.email">Email</label>
            <input
              type="email"
              name="client.mail"
              onChange={formik.handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Phone Number</label>
            <input
              type="text"
              name="client.phoneNumber"
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="breakfast" />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="shuttle" />
            <label htmlFor="breakfast">Shuttle</label>
          </div>
        </div>
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
