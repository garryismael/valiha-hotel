import NestedLayout from "@/components/Layout/NestedLayout";
import { GetCarsInteractor, GetCarsUseCase } from "@/domain/use-cases/car";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";
import container from "@/infrastructure/config/container.config";
import { Car } from "@/domain/entities/car";
import CarCard from "@/components/Car/CarCard";

type Props = {
  cars: Car[];
};

const Page = ({ cars }: Props) => {
  return (
    <section className="container mx-auto">
      <h1 className="title">Location de voitures</h1>
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
