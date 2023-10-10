import { Link } from "react-router-dom";
import TopHeader from "../TopHeader";
import "./index.css";
import { useTranslation } from "react-i18next";

const MenuHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed-navbar">
      <header className="menu-header">
        <TopHeader />
        <div className="nav-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block"></div>
                <div className="col-lg-2 col-md-6 col-6">
                  <div className="mt-5">
                    <Link to="/" className="valihahotel-logo">
                      <img src="/img/logo.png" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-9 col-md-1 col-1">
                  <div className="page-links collapse navbar-collapse">
                    <button className="d-none">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 384 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                      </svg>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li>
                        <Link to="/">{t("menu.home")}</Link>
                      </li>
                      <li>
                        <Link to="/">{t("menu.reservation")}</Link>
                      </li>
                      <li>
                        <Link to="/">{t("menu.blog")}</Link>
                      </li>
                      <li>
                        <Link to="/">{t("menu.rooms")}</Link>
                        <ul>
                          <li>
                            <Link to="/">{t("menu.with-breakfast")}</Link>
                          </li>
                          <li>
                            <Link to="/">{t("menu.with-kitchen")}</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/">{t("menu.location")}</Link>
                      </li>
                      <li>
                        <Link to="/">{t("menu.contact")}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-1 col-md-2 col-2"></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default MenuHeader;
