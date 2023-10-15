import BookingForm from "@/components/Booking/booking-form";
import NestedLayout from "@/components/Layout/NestedLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  return <BookingForm />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export default Page;
