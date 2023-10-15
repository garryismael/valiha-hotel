import { useSearchRoom } from "@/hooks/room";
import DatePicker from "react-datepicker";

const SearchRooms = () => {
  const formik = useSearchRoom();
  return (
    <form onSubmit={formik.handleSubmit} className="search__rooms">
      <div className="flex flex-col pl-6">
        <label htmlFor="checkIn">Check Out</label>
        <DatePicker
          portalId="checkIn"
          showIcon={true}
          name="checkIn"
          minDate={new Date()}
          selected={formik.values.checkIn}
          onChange={(date: Date) => formik.setFieldValue("checkOut", date)}
          className="bg-transparent outline-none !pl-7"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="checkOut">Check In</label>
        <DatePicker
          portalId="checkOut"
          name="checkOut"
          showIcon={true}
          minDate={formik.values.checkIn}
          selected={formik.values.checkOut}
          onChange={(date: Date) => formik.setFieldValue("checkOut", date)}
          className="bg-transparent outline-none !pl-7"
        />
      </div>
      <button
        type="submit"
        className=" bg-reddish-orange-500 py-9 text-white px-2 basis-1/4"
      >
        Find Availability
      </button>
    </form>
  );
};

export default SearchRooms;
