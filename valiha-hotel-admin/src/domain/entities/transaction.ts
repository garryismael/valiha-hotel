import { Payment } from "./payment";
import { User } from "./user";

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  paymentType: string;
  payment: Payment;
  user: User;
}
