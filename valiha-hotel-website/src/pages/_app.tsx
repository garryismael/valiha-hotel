import BaseLayout from "@/components/Layout/BaseLayout";
import "@/infrastructure/config/container.config";
import "@/styles/globals.css";
import { NextPage } from "next";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <BaseLayout>{getLayout(<Component {...pageProps} />)}</BaseLayout>;
}

export default appWithTranslation(App);
