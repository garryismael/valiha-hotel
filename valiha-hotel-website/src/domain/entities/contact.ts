import { User } from "./user";

export interface Contact {
  id: string;
  client: User;
  subject: string;
  message: string;
}
