import TransactionPage from "@/pages/Transaction";
import container from "@/infrastructures/config/container.config";
import {
  GetTransactionsInteractor,
  GetTransactionsUseCase,
} from "@/domain/use-cases/transaction";

const Page = async () => {
  const getTransactions = container.resolve<GetTransactionsUseCase>(
    GetTransactionsInteractor
  );
  const transactions = await getTransactions.execute();
  return <TransactionPage transactions={transactions} />;
};

export default Page;
