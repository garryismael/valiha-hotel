import { inject, injectable } from "tsyringe";
import { User } from "../entities/user";

export interface UserRequest {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export interface UserService {
  findAll(): Promise<User[]>;
  create(request: UserRequest): Promise<User>;
}

export interface GetUsersUseCase {
  execute(): Promise<User[]>;
}

export interface CreateUserUseCase {
  execute(request: UserRequest): Promise<User>;
}

@injectable()
export class GetUsersInteractor implements GetUsersUseCase {
  constructor(@inject("UserService") private userService: UserService) {}

  execute(): Promise<User[]> {
    return this.userService.findAll();
  }
}

@injectable()
export class CreateUserInteractor implements CreateUserUseCase {
  constructor(@inject("UserService") private userService: UserService) {}
  execute(request: UserRequest): Promise<User> {
    return this.userService.create(request);
  }
}
