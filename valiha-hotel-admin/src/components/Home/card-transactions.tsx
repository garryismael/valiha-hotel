'use client';
import { Transaction } from "@/domain/entities/transaction";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

type Props =  {
  transactions: Transaction[];
}


export const CardTransactions = ({transactions}: Props) => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              Dernière Transactions
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          {transactions.slice(0, 5).map((item) => (
            <div key={item.user.lastName} className="grid grid-cols-4 w-full">
              <div className="">
                <Avatar
                  isBordered
                  color="secondary"
                  src={item.user.image}
                />
              </div>
              <span className="text-default-900  font-semibold">
                {item.user.lastName}
              </span>
              <div>
                <span className="text-success text-xs">{item.amount} MGA</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
