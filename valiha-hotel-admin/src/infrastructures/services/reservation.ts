import { Reservation } from "@/domain/entities/reservation";
import { ReservationService } from "@/domain/use-cases/reservation";
import http from "@/lib/axios";
import { injectable } from "tsyringe";

export const RESERVATION_PATH = "/RESERVATIONS-SERVICE/reservations";
@injectable()
export class ReservationServiceImpl implements ReservationService {
  async findAll(): Promise<Reservation[]> {
    const response = await http.get<Reservation[]>(RESERVATION_PATH);
    return response.data;
  }
}
