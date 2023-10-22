import useScroll from "@/hooks/scroll";
import Image from "next/image";
import Link from "next/link";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
} from "react-icons/fa6";
import { useLanguageSwitcher } from "@/hooks/translation";
import { useTranslation } from "next-i18next";

const MenuHeader = () => {
  const isScrolled = useScroll();
  const { i18n, onSwitch } = useLanguageSwitcher();

  const { t } = useTranslation();

  return (
    <header className="absolute top-0 w-full z-50">
      <div className="flex items-center justify-between z-20 bg-slate-blue-500 text-white">
        <div className="flex items-center gap-2 header__contact">
          <div>
            <FaEnvelope size={16} />
            <span>contact@valihahotel.com</span>
          </div>
          <div>
            <FaPhone size={16} />
            <span>+261 34 50 741 52</span>
          </div>
          <div>
            <FaLocationDot size={16} />
            <span>Immeuble Valiha Antanimena, IVG 204 Antananarivo</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2 border-solid border-r-2 border-gray-200">
            <Image
              src={`/assets/images/flags/${i18n.language}.png`}
              alt="flag"
              sizes="100%"
              width={24}
              height={24}
              className="w-auto"
            />
            <select
              className="border-none outline-none mr-2 text-white bg-transparent"
              value={i18n.language}
              onChange={(e) => onSwitch(e.target.value)}
            >
              <option value="fr" className="text-slate-500">
                Français
              </option>
              <option value="en" className="text-slate-500">
                Anglais
              </option>
              <option value="zh" className="text-slate-500">
                Chinois
              </option>
            </select>
          </div>
          <div className="flex items-center gap-2 px-2">
            <FaFacebookF />
            <FaGoogle />
          </div>
        </div>
      </div>
      <div
        className={`flex items-center justify-around pt-6 ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-dark-500 text-white shadow-lg !pt-0 z-50"
            : ""
        }`}
      >
        <div>
          <Image
            src="/assets/images/logo.png"
            width={250}
            height={100}
            sizes="100%"
            alt="logo"
          />
        </div>
        <nav>
          <ul className="flex items-center gap-16">
            <li>
              <Link href="/">{t("menu.home")}</Link>
            </li>
            <li>
              <Link href="/rooms/find">{t("menu.reservation")}</Link>
            </li>
            <li>
              <Link href="/blogs" locale={i18n.language}>
                {t("menu.blog")}
              </Link>
            </li>
            <li>
              <Link href="/">{t("menu.room")}</Link>
            </li>
            <li>
              <Link href="/">{t("menu.rent_car")}</Link>
            </li>
            <li>
              <Link href="/">{t("menu.contact")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MenuHeader;
