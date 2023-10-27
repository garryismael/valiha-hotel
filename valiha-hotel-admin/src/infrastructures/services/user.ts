import { User } from "@/domain/entities/user";
import { UserRequest, UserService } from "@/domain/use-cases/user";
import http from "@/lib/axios";
import { injectable } from "tsyringe";

@injectable()
export class UserServiceImpl implements UserService {
  async findAll(): Promise<User[]> {
    const response = await http.get<User[]>("/USERS-SERVICE/users");
    return response.data;
  }

  create(request: UserRequest): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
