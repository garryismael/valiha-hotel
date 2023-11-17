"use client";
import { User } from "@/domain/entities/user";
import dynamic from "next/dynamic";
import { CardDonut } from "./card-donut";
import { CardTransactions } from "./card-transactions";
import { Transaction } from "@/domain/entities/transaction";

const Chart = dynamic(
  () => import("@/components/Chart/steam").then((mod) => mod.Steam),
  {
    ssr: false,
  }
);

export const Content = ({ transactions }: { transactions: Transaction[] }) => (
  <div className=" h-full">
    <div className="flex justify-center gap-4 xl:gap-12 pt-3 px-4 lg:px-0  flex-wrap xl:flex-nowrap sm:pt-10 max-w-[100rem] mx-auto w-full">
      <div className="mt-6  gap-6 flex flex-col w-full">
        {/* Chart */}
        <div className="h-full flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Statistiques</h3>
          <div className="w-full bg-default-50 shadow-lg rounded-2xl p-6 h-[488px]">
            <Chart />
          </div>
        </div>
      </div>

      {/* Left Section */}
      <div className="mt-4 gap-2 flex flex-col xl:max-w-md w-full">
        <h3 className="text-xl font-semibold">Section</h3>
        <div className="flex flex-col justify-center gap-4 flex-wrap md:flex-nowrap md:flex-col">
          <CardDonut />
          <CardTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  </div>
);
