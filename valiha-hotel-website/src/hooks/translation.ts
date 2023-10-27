import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const useLanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const onSwitch = async (language: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, router.asPath, { locale: language });
  };

  return { i18n, onSwitch };
};
