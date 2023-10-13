import { useState } from "react";
import DatePicker from "react-datepicker";

const SearchRooms = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <form className="search__rooms">
      <div className="flex flex-col pl-6">
        <label htmlFor="checkIn">Check Out</label>
        <DatePicker
          portalId="checkIn"
          showIcon={true}
          name="checkIn"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          className="bg-transparent outline-none !pl-7"
          popperClassName="relative !z-40"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="checkOut">Check In</label>
        <DatePicker
          portalId="checkOut"
          name="checkOut"
          showIcon={true}
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
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
