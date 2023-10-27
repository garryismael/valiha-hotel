import CarLocation from "@/components/Car/car-form";
import NestedLayout from "@/components/Layout/NestedLayout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

const Page = () => {
  return (
    <section className="container mx-auto">
      <h1 className="title">Formulaire de location</h1>
      <CarLocation />
    </section>
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
