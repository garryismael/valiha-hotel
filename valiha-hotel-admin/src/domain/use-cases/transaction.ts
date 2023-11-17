import { inject, injectable } from "tsyringe";
import { Transaction } from "../entities/transaction";

export interface TransactionRequest {
  amount: number;
  paymentType: string;
  paymentId: string;
}

export interface TransactionService {
  create(request: TransactionRequest): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
  findById(id: string): Promise<Transaction>;
  findByPaymentId(id: string): Promise<Transaction>;
  edit(id: string, request: TransactionRequest): Promise<Transaction>;
}

export interface CreateTransactionUseCase {
  execute(request: TransactionRequest): Promise<Transaction>;
}

export interface EditTransactionUseCase {
  execute(id: string, request: TransactionRequest): Promise<Transaction>;
}

export interface FindTransactionUseCase {
  execute(id: string): Promise<Transaction>;
}

export interface FindTransactionByPaymentUseCase {
  execute(id: string): Promise<Transaction>;
}

export interface GetTransactionsUseCase {
  execute(): Promise<Transaction[]>;
}

@injectable()
export class CreateTransactionInteractor implements CreateTransactionUseCase {
  constructor(
    @inject("TransactionService") private transactionService: TransactionService
  ) {}
  execute(request: TransactionRequest): Promise<Transaction> {
    return this.transactionService.create(request);
  }
}

@injectable()
export class EditTransactionInteractor implements EditTransactionUseCase {
  constructor(
    @inject("TransactionService") private transactionService: TransactionService
  ) {}
  execute(id: string, request: TransactionRequest): Promise<Transaction> {
    return this.transactionService.edit(id, request);
  }
}

@injectable()
export class FindTransactionInteractor implements FindTransactionUseCase {
  constructor(
    @inject("TransactionService") private transactionService: TransactionService
  ) {}
  execute(id: string): Promise<Transaction> {
    return this.transactionService.findById(id);
  }
}

@injectable()
export class FindTransactionByPaymentIdInteractor implements FindTransactionByPaymentUseCase {
  constructor(
    @inject("TransactionService") private transactionService: TransactionService
  ) {}
  execute(id: string): Promise<Transaction> {
    return this.transactionService.findByPaymentId(id);
  }
}

@injectable()
export class GetTransactionsInteractor implements GetTransactionsUseCase {
  constructor(
    @inject("TransactionService") private transactionService: TransactionService
  ) {}
  execute(): Promise<Transaction[]> {
    return this.transactionService.findAll();
  }
}
