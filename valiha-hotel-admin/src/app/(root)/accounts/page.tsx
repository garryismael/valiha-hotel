import { Accounts } from "@/components/User";
import { GetUsersInteractor, GetUsersUseCase } from "@/domain/use-cases/user";
import container from "@/infrastructures/config/container.config";

const accounts = async () => {
  const getUsers = container.resolve<GetUsersUseCase>(GetUsersInteractor);
  const users = await getUsers.execute();
  return <Accounts users={users}/>;
};

export default accounts;
