import { Reservation } from "@/domain/entities/reservation";
import {
  ReservationBaseRequest,
  ReservationService,
} from "@/domain/use-cases/reservation";
import http from "@/lib/axios";
import { injectable } from "tsyringe";

export const RESERVATION_PATH = "/RESERVATIONS-SERVICE/reservations";
@injectable()
export class ReservationServiceImpl implements ReservationService {
  async edit(
    id: string,
    request: ReservationBaseRequest
  ): Promise<Reservation> {
    const response = await http.put<Reservation>(
      `${RESERVATION_PATH}/${id}`,
      request
    );
    return response.data;
  }

  async findOneById(id: string): Promise<Reservation> {
    const response = await http.get<Reservation>(`${RESERVATION_PATH}/${id}`);
    return response.data;
  }

  deleteById(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  async findAll(): Promise<Reservation[]> {
    const response = await http.get<Reservation[]>(RESERVATION_PATH);
    return response.data;
  }
}
