import { Client } from "./client";

export interface Contact {
  id: string;
  client: Client;
  subject: string;
  message: string;
}
