import Image from "next/image";
import { FaEnvelope, FaFacebook, FaGoogle, FaLocationDot, FaPhone } from "react-icons/fa6";

const TopHeader = () => {
  return (
    <div className="relative flex items-center justify-between m-0 py-4 text-white mx-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>contact@valihahotel.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+261 34 50 741 52</span>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <span> Immeuble Valiha Antanimena, IVG 204 Antananarivo</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Image
          src="/assets/images/flags/fr.png"
          width={24}
          height={24}
          alt="flags"
        />
        <select className="bg-transparent border-none outline-none">
          <option className="text-dark-muted-500" value="français">Français</option>
          <option className="text-dark-muted-500" value="anglais">Anglais</option>
          <option className="text-dark-muted-500" value="chinois">Chinois</option>
        </select>
        <FaFacebook />
        <FaGoogle />
      </div>
    </div>
  );
};

export default TopHeader;
