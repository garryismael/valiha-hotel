"use client";

import { Transaction } from "@/domain/entities/transaction";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { TransactionRenderCell } from "./render-table";
import { transactionColumns } from "@/constants/transactions";

type Props = {
  transactions: Transaction[];
};

const TransactionTable = ({ transactions }: Props) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;
  const pages = Math.ceil(transactions.length / rowsPerPage);

  const data = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return transactions.slice(start, end);
  }, [page, transactions]);

  return (
    <Table
      isStriped
      aria-label="Transaction Table"
      bottomContent={
        <div className="flex w-full justify-end">
          <div className="flex justify-between gap-16 mr-24">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
            <div>
              <span className="text-lg font-semibold">Total: </span>
              <span className="text-xl font-bold">
                {transactions.reduce((prev, next) => prev + next.amount, 0)} MGA
              </span>
            </div>
          </div>
        </div>
      }
    >
      <TableHeader columns={transactionColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            hideHeader={column.uid === "actions"}
            width={column.uid === "rooms" ? 150 : 100}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data} emptyContent={"Aucune données à afficher."}>
        {(transaction) => (
          <TableRow>
            {(columnKey) => (
              <TableCell key={columnKey}>
                {TransactionRenderCell({
                  transaction,
                  columnKey,
                })}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
