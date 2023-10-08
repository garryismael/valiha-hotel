import { IClient } from "@/core/interfaces/models/Client";

export class Client implements IClient {
  constructor(
    private id: string,
    private firstName: string,
    private lastName: string,
    private phoneNumber: string,
    private email: string
  ) { }
  
  getId(): string {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }
  
  getEmail(): string {
    return this.email;
  }
}
