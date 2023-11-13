import { Car } from "./car";
import { Client } from "./client";
import { Payment } from "./payment";

export interface Location {
  id: string;
  state: string;
  start: string;
  end: string;
  destination: string;
  reason: string;
  client: Client;
  cars: Car[];
  payment: Payment;
}
