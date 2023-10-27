import { Content } from "@/components/Home/content";
import { GetUsersInteractor, GetUsersUseCase } from "@/domain/use-cases/user";
import container from "@/infrastructures/config/container.config";
import type { NextPage } from "next";

const Home: NextPage = async () => {
  const getUsers = container.resolve<GetUsersUseCase>(GetUsersInteractor);
  const users = await getUsers.execute();
  return <Content users={users}/>;
};

export default Home;
