import { Layout } from "@/components/Layout";
import "@/infrastructures/config/container.config";
import "@/styles/global.css";

import NextThemesProvider from "@/components/Layout/NextThemesProvider";
import NextUIWrapper from "@/components/Layout/NextUIWrapper";
import NextAuthProvider from "@/components/Provider";
import type { Metadata } from "next";
import ReduxProvider from "@/components/StoreProvider";

export const metadata: Metadata = {
  title: "Valiha Hotel - Admin",
  description: "Generated by Trustylabs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <NextAuthProvider>
            <NextThemesProvider>
              <NextUIWrapper>
                <Layout>{children}</Layout>
              </NextUIWrapper>
            </NextThemesProvider>
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
