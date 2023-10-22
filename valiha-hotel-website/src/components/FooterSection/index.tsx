import Image from "next/image";
import {
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import styles from "./index.module.css";
import { useTranslation } from "next-i18next";

const FooterSection = () => {
  const { t } = useTranslation();
  return (
    <footer className="pt-8">
      <div className="bg-dark-500 py-16">
        <div className="container mx-auto  flex items-start justify-center text-white">
          <div className="flex flex-col justify-center gap-2 w-1/4">
            <div className="relative d-flex items-center justify-center h-16 w-[180px] mx-auto">
              <Image
                src="/assets/images/logo.png"
                fill={true}
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className={styles.media}>
                <FaFacebook size={18} className="hover:text-dark-500" />
              </div>
              <div className={styles.media}>
                <FaGoogle size={18} className="hover:text-dark-500" />
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <h2 className={`${styles.h2} uppercase`}>{t("home.footer.service.title")}</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">{t("home.footer.service.breakfast")}</a>
              </li>
              <li>
                <a href="#">{t("home.footer.service.parking")}</a>
              </li>
              <li>
                <a href="#">{t("home.footer.service.shuttle")}</a>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h2 className={`${styles.h2} uppercase`}>{t("home.footer.partners.title")}</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Google</a>
              </li>
              <li>
                <a href="#">Airbnb</a>
              </li>
              <li>
                <a href="#">Booking.com</a>
              </li>
              <li>
                <a href="#">Tripadvisor</a>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h2 className={`${styles.h2} uppercase`}>{t("home.footer.contact.title")}</h2>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <FaLocationDot size={20} />
                <span>{t("home.footer.contact.address")}</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone size={20} />
                <span>+261 34 50 741 52</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope size={20} />
                <span>contact@valihahotel.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#1e2332] text-center text-white py-4">
        Copyright © {new Date().getFullYear()} Valiha Hôtel
      </div>
    </footer>
  );
};

export default FooterSection;
