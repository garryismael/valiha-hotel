import { Transaction } from "@/domain/entities/transaction";
import {
  TransactionRequest,
  TransactionService,
} from "@/domain/use-cases/transaction";
import http from "@/lib/axios";

const TRANSACTION_PATH = "/PAYMENTS-SERVICE/transactions";

export class TransactionServiceImpl implements TransactionService {
  async findByPaymentId(id: string): Promise<Transaction> {
    const response = await http.get<Transaction>(
      `${TRANSACTION_PATH}/payments/${id}`
    );
    return response.data;
  }
  async create(request: TransactionRequest): Promise<Transaction> {
    const response = await http.post<Transaction>(TRANSACTION_PATH, request);
    return response.data;
  }

  async findAll(): Promise<Transaction[]> {
    const response = await http.get<Transaction[]>(TRANSACTION_PATH);
    return response.data;
  }

  async findById(id: string): Promise<Transaction> {
    const response = await http.get<Transaction>(`${TRANSACTION_PATH}/${id}`);
    return response.data;
  }

  async edit(id: string, request: TransactionRequest): Promise<Transaction> {
    const response = await http.put<Transaction>(
      `${TRANSACTION_PATH}/${id}`,
      request
    );
    return response.data;
  }
}
