import NestedLayout from "@/components/Layout/NestedLayout";
import SearchRooms from "@/components/SearchRooms";
import { NextPageWithLayout } from "@/pages/_app";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

const Page: NextPageWithLayout = () => {
  return (
    <div className="h-48">
      <div className="absolute right-0 z-10 w-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2">
        <SearchRooms />
      </div>
    </div>
  );
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
