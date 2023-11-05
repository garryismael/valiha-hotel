import { inject, injectable } from "tsyringe";
import { User } from "../entities/user";

export interface UserBaseRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  image: File | null;
}
export interface UserRequest extends UserBaseRequest {
  password: string;
  confirmPassword: string;
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
