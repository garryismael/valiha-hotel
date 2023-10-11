import BaseLayout from "@/components/Layout/BaseLayout";
import "@/infrastructure/config/container.config";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default appWithTranslation(App);
