import { LuCoffee, LuParkingCircle, LuWifi } from "react-icons/lu";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HotelService from "./HotelService";

const ServiceSection = () => {
  return (
    <section className="my-24">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="service-swiper"
      >
        <SwiperSlide>
          <HotelService
            Icon={LuParkingCircle}
            text="Parking"
            img="/assets/images/services/parking.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuWifi}
            text="Wifi"
            img="/assets/images/services/wifi.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuCoffee}
            text="Breakfast"
            img="/assets/images/services/breakfast.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuParkingCircle}
            text="Parking"
            img="/assets/images/services/parking.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuWifi}
            text="Wifi"
            img="/assets/images/services/wifi.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuCoffee}
            text="Breakfast"
            img="/assets/images/services/breakfast.webp"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ServiceSection;
