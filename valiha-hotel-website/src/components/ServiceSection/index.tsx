import { LuCoffee, LuParkingCircle, LuWifi } from "react-icons/lu";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HotelService from "./HotelService";
import {useTranslation} from "next-i18next";

const ServiceSection = () => {
  const {t} = useTranslation();  
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
            text={t("home.service.parking")}
            img="/assets/images/services/parking.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuWifi}
            text={t("home.service.wifi")}
            img="/assets/images/services/wifi.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuCoffee}
            text={t("home.service.breakfast")}
            img="/assets/images/services/breakfast.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuParkingCircle}
            text={t("home.service.parking")}
            img="/assets/images/services/parking.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuWifi}
            text={t("home.service.wifi")}
            img="/assets/images/services/wifi.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <HotelService
            Icon={LuCoffee}
            text={t("home.service.breakfast")}
            img="/assets/images/services/breakfast.webp"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ServiceSection;
