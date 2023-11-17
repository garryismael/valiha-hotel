import { Content } from "@/components/Home/content";
import {
  GetTransactionsInteractor,
  GetTransactionsUseCase,
} from "@/domain/use-cases/transaction";
import container from "@/infrastructures/config/container.config";
import type { NextPage } from "next";

const Home: NextPage = async () => {
  const getTransactions = container.resolve<GetTransactionsUseCase>(
    GetTransactionsInteractor
  );
  const transactions = await getTransactions.execute();
  return <Content transactions={transactions} />;
};

export default Home;
