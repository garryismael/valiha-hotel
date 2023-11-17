import CarCard from "@/components/Car/CarCard";
import NestedLayout from "@/components/Layout/NestedLayout";
import { Car } from "@/domain/entities/car";
import { GetCarsInteractor, GetCarsUseCase } from "@/domain/use-cases/car";
import container from "@/infrastructure/config/container.config";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

type Props = {
  cars: Car[];
};

const Page = ({ cars }: Props) => {
  const {t} = useTranslation();
  return (
    <section className="container mx-auto">
      <h1 className="title">{t("location_title")}</h1>
      <div className="flex items-center justify-between flex-wrap gap-3 content-between">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getServerSideProps({ locale }: { locale: string }) {
  const translation = await serverSideTranslations(locale, ["common"]);
  const findCars = container.resolve<GetCarsUseCase>(GetCarsInteractor);

  const cars = await findCars.execute();
  return {
    props: {
      ...translation,
      cars,
    },
  };
}

export default Page;
