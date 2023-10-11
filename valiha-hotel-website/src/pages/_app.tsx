import BaseLayout from "@/components/Layout/BaseLayout";
import "@/infrastructure/config/container.config";
import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  );
}

export default appWithTranslation(App);
