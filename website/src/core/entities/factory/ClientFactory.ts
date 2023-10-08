import { Client } from "@/core/entities/models/Client";
import { ClientFactory } from "@/core/interfaces/factory/ClientFactory";
import { IClient } from "@/core/interfaces/models/Client";

export class ClientFactoryImpl implements ClientFactory {
  create(
    id: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string
  ): IClient {
    return new Client(id, firstName, lastName, phoneNumber, email);
  }
}
