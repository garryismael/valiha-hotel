import { useSearchRoom } from "@/hooks/room";
import { useTranslation } from "next-i18next";
import DatePicker from "react-datepicker";

const SearchRooms = () => {
  const formik = useSearchRoom();
  const {t} = useTranslation();
  return (
    <form onSubmit={formik.handleSubmit} className="search__rooms">
      <div className="flex flex-col pl-6">
        <label htmlFor="checkIn">{t("home.search.check_in")}</label>
        <DatePicker
          portalId="checkIn"
          showIcon={true}
          name="checkIn"
          minDate={new Date()}
          selected={formik.values.checkIn}
          dateFormat="dd/MM/yyyy"
          onChange={(date: Date) => formik.setFieldValue("checkIn", date)}
          className="bg-transparent outline-none !pl-7"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="checkOut">{t("home.search.check_out")}</label>
        <DatePicker
          portalId="checkOut"
          name="checkOut"
          showIcon={true}
          minDate={formik.values.checkIn}
          selected={formik.values.checkOut}
          dateFormat="dd/MM/yyyy"
          onChange={(date: Date) => formik.setFieldValue("checkOut", date)}
          className="bg-transparent outline-none !pl-7"
        />
      </div>
      <button
        type="submit"
        className=" bg-dark-500 hover:bg-reddish-orange-500 py-9 text-white px-2 basis-1/4"
      >
        {t("home.search.button")}
      </button>
    </form>
  );
};

export default SearchRooms;
