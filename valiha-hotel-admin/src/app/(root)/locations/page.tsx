import LocationPage from "@/pages/LocationPage";
import container from "@/infrastructures/config/container.config";
import { GetLocationInteractor, GetLocationsUseCase } from "@/domain/use-cases/location";

const Page = async () => {
  const getLocations = container.resolve<GetLocationsUseCase>(GetLocationInteractor);
  const locations = await getLocations.execute();
  return <LocationPage locations={locations}/>
};

export default Page;
