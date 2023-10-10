import { useTranslation } from "react-i18next";
import "./index.css";
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import useHeader from "app/hooks/header";
import { facebook_link, google_link, langages } from "app/constants";

const TopHeader = () => {
  const { t, i18n } = useTranslation();
  const { handleChange } = useHeader();
  return (
    <div className="top-header">
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col col-lg-9 col-md-10 col-sm-12 col-12">
            <div className="contacts">
              <ul>
                <li>
                  <FaEnvelope size={16} />
                  <span>contact@valihahotel.com</span>
                </li>
                <li>
                  <FaPhone size={16} />
                  <span>+261 34 50 741 52</span>
                </li>
                <li>
                  <FaLocationDot size={16} />
                  <span>{t("contact.address")}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-3 col-md-2 col-sm-12 col-12">
            <ul className="d-flex justify-content-end list-style-none">
              <li className="d-flex align-items-center langage">
                <img
                  src={`/img/flags/${i18n.resolvedLanguage}.png`}
                  alt="flag"
                />
                <select value={i18n.resolvedLanguage} onChange={handleChange}>
                  {langages.map(({ key, value }) => (
                    <option key={key} value={key}>
                      {t(value)}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <a target="_blank" href={facebook_link} rel="noreferrer">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a target="_blank" href={google_link} rel="noreferrer">
                  <FaGoogle />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
