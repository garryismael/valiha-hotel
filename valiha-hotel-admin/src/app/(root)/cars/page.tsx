import CarSection from "@/components/Car/CarSection";
import { GetCarsInteractor, GetCarsUseCase } from "@/domain/use-cases/car";
import container from "@/infrastructures/config/container.config";

const Page = async () => {
  const getCars = container.resolve<GetCarsUseCase>(GetCarsInteractor);
  const cars = await getCars.execute();
  return <CarSection cars={cars} />;
};

export default Page;
