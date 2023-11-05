import ClientPage from "@/pages/Client";

import container from "@/infrastructures/config/container.config";
import {
  GetClientsInteractor,
  GetClientsUseCase,
} from "@/domain/use-cases/client";

const Page = async () => {
  const getClients = container.resolve<GetClientsUseCase>(GetClientsInteractor);
  const clients = await getClients.execute();
  return <ClientPage clients={clients}/>;
};

export default Page;
