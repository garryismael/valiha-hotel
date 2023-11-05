import { inject, injectable } from "tsyringe";
import { Client } from "../entities/client";

export interface ClientRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface ClientService {
  findAll(): Promise<Client[]>;
  edit(id: string, request: ClientRequest): Promise<Client>;
}

export interface GetClientsUseCase {
  execute(): Promise<Client[]>;
}

export interface EditClientUseCase {
  execute(id: string, request: ClientRequest): Promise<Client>;
}

@injectable()
export class GetClientsInteractor implements GetClientsUseCase {
  constructor(@inject("ClientService") private userService: ClientService) {}

  execute(): Promise<Client[]> {
    return this.userService.findAll();
  }
}

@injectable()
export class EditClientInteractor implements EditClientUseCase {
  constructor(@inject("ClientService") private userService: ClientService) {}
  execute(id: string, request: ClientRequest): Promise<Client> {
    return this.userService.edit(id, request);
  }
}
