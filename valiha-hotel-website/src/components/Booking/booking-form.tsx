import { useBookingForm } from "@/hooks/reservation";
import ReactDatePicker from "react-datepicker";
import { If, Then } from "react-if";

const BookingForm = () => {
  const {
    formik,
    useBreakfast,
    useShuttle,
    handleCheckBreakfast,
    handleCheckShuttle,
  } = useBookingForm();
  return (
    <section className="w-full max-w-4xl shadow-lg mx-auto mt-12">
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
            <input
              type="checkbox"
              name="breakfast"
              checked={useBreakfast}
              onChange={handleCheckBreakfast}
            />
            <label htmlFor="breakfast">Breakfast</label>
          </div>
        </div>
        <If condition={!formik.values.parking && useBreakfast}>
          <Then>
            {formik.values.breakfasts.map((breakfast, index) => (
              <div key={index}>
                <label htmlFor="date">Date</label>
                <ReactDatePicker
                  selected={breakfast.date}
                  onChange={(date: Date) =>
                    formik.setFieldValue(`breakfasts.${index}`, date)
                  }
                />
              </div>
            ))}
          </Then>
        </If>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="shuttle"
              checked={useShuttle}
              onChange={handleCheckShuttle}
            />
            <label htmlFor="breakfast">Shuttle</label>
          </div>
        </div>
        <If condition={!formik.values.parking && useShuttle}>
          <Then>
            {formik.values.shuttles.map((shuttle, index) => (
              <>
                <div key={index}>
                  <label htmlFor="date">Date</label>
                  <ReactDatePicker
                    selected={shuttle.date}
                    onChange={(date: Date) =>
                      formik.setFieldValue(`shuttles.${index}`, date)
                    }
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="input-group">
                    <label htmlFor="client.firstName">Flight Name</label>
                    <input
                      type="text"
                      name="client.firstName"
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="client.firstName">Flight Number</label>
                    <input
                      type="text"
                      name="client.firstName"
                      onChange={formik.handleChange}
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="client.firstName">Destination</label>
                  <input
                    type="text"
                    name="client.firstName"
                    onChange={formik.handleChange}
                  />
                </div>
              </>
            ))}
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
