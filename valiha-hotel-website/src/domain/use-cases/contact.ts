import { inject, injectable } from "tsyringe";

export interface ClientRequestDto {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface ContactRequestDto {
  client: ClientRequestDto;
  subject: string;
  message: string;
}

export interface ContactService {
  create(request: ContactRequestDto): Promise<void>;
}

export interface CreateContactUseCase {
  execute(request: ContactRequestDto): Promise<void>;
}

@injectable()
export class CreateContactInteractor implements CreateContactUseCase {
  constructor(
    @inject("ContactService") private contactService: ContactService
  ) {}

  execute(request: ContactRequestDto) {
    return this.contactService.create(request);
  }
}
