import { IClient } from "../models/Client";

export interface ClientFactory {
  create(
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string
  ): IClient;
}
