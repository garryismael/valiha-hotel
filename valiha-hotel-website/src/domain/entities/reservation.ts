import { Breakfast } from "./breakfast";
import { Payment } from "./payment";
import { Room } from "./room";
import { Shuttle } from "./shuttle";
import { User } from "./user";

export interface Reservation {
  id: string;
  checkIn: string;
  checkOut: string;
  state: string;
  parking: boolean;
  client: User;
  payment: Payment;
  rooms: Room[];
  shuttles: Shuttle[];
  breakfasts: Breakfast[];
}
