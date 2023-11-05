import { Client } from "@/domain/entities/client";
import { ClientRequest, ClientService } from "@/domain/use-cases/client";
import http from "@/lib/axios";
import { injectable } from "tsyringe";

const CLIENT_PATH = "/USERS-SERVICE/clients";

@injectable()
export class ClientServiceImpl implements ClientService {
  async edit(id: string, request: ClientRequest): Promise<Client> {
    const response = await http.put<Client>(`${CLIENT_PATH}/${id}`, request);
    return response.data;
  }
  
  async findAll(): Promise<Client[]> {
    const response = await http.get<Client[]>("/USERS-SERVICE/users");
    return response.data;
  }
}
