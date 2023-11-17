import CarLocation from "@/components/Car/car-form";
import NestedLayout from "@/components/Layout/NestedLayout";
import { Car } from "@/domain/entities/car";
import { GetCarInteractor, GetCarUseCase } from "@/domain/use-cases/car";
import container from "@/infrastructure/config/container.config";
import { NextPageContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

export type CarProps = {
  car: Car;
}

const Page = (props: CarProps) => {
  const {t} = useTranslation();
  return (
    <section className="flex flex-col justify-between">
      <h1 className="title text-center">{t("location_form")}</h1>
      <CarLocation car={props.car}/>
    </section>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getServerSideProps(context: NextPageContext) {
  const translation = await serverSideTranslations(context.locale as string, [
    "common",
  ]);
  const carId = context.query.id as string;
  const getCar = container.resolve<GetCarUseCase>(GetCarInteractor);
  const car = await getCar.execute(carId);
  return {
    props: {
      ...translation,
      car
    },
  };
}

export default Page;
