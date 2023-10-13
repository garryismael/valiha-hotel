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
const MenuHeader = () => {
  const isScrolled = useScroll();
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
              src="/assets/images/flags/fr.png"
              alt="flag"
              sizes="100%"
              width={24}
              height={24}
              className="w-auto"
            />
            <select className="border-none outline-none mr-2 text-white bg-transparent">
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
            alt="logo"
          />
        </div>
        <nav>
          <ul className="flex items-center gap-16">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/rooms/available">Reservation</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Rooms</Link>
            </li>
            <li>
              <Link href="/">Cars</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MenuHeader;
