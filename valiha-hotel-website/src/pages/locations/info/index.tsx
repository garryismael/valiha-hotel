import NestedLayout from "@/components/Layout/NestedLayout";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

const Page = () => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto">
      <h1 className="title">{t("location.info.title")}</h1>
      <div className="grid grid-cols-2">
        <Card shadow="sm" className="w-[700px]">
          <CardBody className="overflow-visible py-2 relative h-[600px]">
            <Image
              src="/assets/images/vehicles/LandCruiser.webp"
              alt="Nissan"
              fill={true}
              sizes="100%"
              className="w-full object-fill h-[700px]"
            />
          </CardBody>
        </Card>
        <div className="flex flex-col gap-8 w-3/4">
          <h2 className="title text-4xl">{t("location.info.sub_title")}</h2>
          <p>{t("location.info.paragraph")}</p>
          <Link
            href="/locations/cars"
            className="btn btn-orange rounded-sm w-fit text-white border-none"
          >
            {t("location.info.button")}
          </Link>
        </div>
      </div>
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
