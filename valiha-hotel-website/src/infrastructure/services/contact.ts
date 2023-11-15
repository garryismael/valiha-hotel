import { ContactRequestDto, ContactService } from "@/domain/use-cases/contact";
import { injectable } from "tsyringe";
import http from "../config/axios";

const CONTACT_PATH = "/USERS-SERVICE/contact";

@injectable()
export class ContactServiceImpl implements ContactService {
  async create(request: ContactRequestDto): Promise<void> {
    await http.post(CONTACT_PATH, request);
  }
}
