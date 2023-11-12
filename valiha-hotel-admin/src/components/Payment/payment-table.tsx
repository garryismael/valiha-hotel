"use client";

import { paymentColumns } from "@/constants/payment";
import { Payment } from "@/domain/entities/payment";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { PaymentRenderCell } from "./render-table";
import { useMemo, useState } from "react";

type Props = {
  payments: Payment[];
};

const PaymentTable = ({ payments }: Props) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const pages = Math.ceil(payments.length / rowsPerPage);

  const data = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return payments.slice(start, end);
  }, [page, payments]);

  return (
    <Table
      aria-label="Client Table"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
    >
      <TableHeader columns={paymentColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data} emptyContent={"Aucune données à afficher."}>
        {(payment) => (
          <TableRow>
            {(columnKey) => (
              <TableCell>
                {PaymentRenderCell({
                  payment,
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

export default PaymentTable;
