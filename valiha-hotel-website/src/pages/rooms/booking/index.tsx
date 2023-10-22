import BookingForm from "@/components/Booking/booking-form";
import NestedLayout from "@/components/Layout/NestedLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Page: NextPageWithLayout = () => {
  return <BookingForm />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getServerSideProps({ locale }: { locale: string }) {
  const translation = await serverSideTranslations(locale, ["common"]);

  return {
    props: {
      ...translation,
    },
  };
}

export default Page;
