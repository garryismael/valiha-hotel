import { Accounts } from "@/components/User";
import { GetUsersInteractor, GetUsersUseCase } from "@/domain/use-cases/user";
import container from "@/infrastructures/config/container.config";
import AdminPage from "@/pages/Admin/AdminPage";

const accounts = async () => {
  const getUsers = container.resolve<GetUsersUseCase>(GetUsersInteractor);
  const users = await getUsers.execute();
  return <AdminPage users={users}/>;
};

export default accounts;
