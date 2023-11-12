import { Layout } from "@/components/Layout";
import "@/infrastructures/config/container.config";
import "@/styles/global.css";
import "@/styles/invoice.css";
import 'react-toastify/dist/ReactToastify.css';

import NextThemesProvider from "@/components/Layout/NextThemesProvider";
import NextAuthProvider from "@/components/Provider";
import ReduxProvider from "@/components/StoreProvider";
import ToastProvider from "@/components/ToastProvider";
import type { Metadata } from "next";

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
    <NextAuthProvider>
      <html lang="en">
        <body>
          <ReduxProvider>
            <NextThemesProvider>
              <ToastProvider>
                <Layout>{children}</Layout>
              </ToastProvider>
            </NextThemesProvider>
          </ReduxProvider>
        </body>
      </html>
    </NextAuthProvider>
  );
}
