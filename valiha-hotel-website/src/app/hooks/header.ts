import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const useHeader = () => {
  const location = useLocation();
  const { i18n } = useTranslation();
  const navigation = useNavigate();

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const pathname = location.pathname.replace(
      i18n.resolvedLanguage || "fr",
      e.target.value
    );
    await i18n.changeLanguage(e.target.value);
    navigation(pathname, {
      state: location.state,
      replace: true,
    });
  };

  return { handleChange };
};

export default useHeader;
