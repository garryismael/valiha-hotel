import { Breakfast } from "./breakfast";
import { Client } from "./client";
import { Payment } from "./payment";
import { Room } from "./room";
import { Shuttle } from "./shuttle";

export interface Reservation {
  id: string;
  checkIn: string;
  checkOut: string;
  state: string;
  parking: boolean;
  client: Client;
  payment: Payment;
  rooms: Room[];
  shuttles: Shuttle[];
  breakfasts: Breakfast[];
}
