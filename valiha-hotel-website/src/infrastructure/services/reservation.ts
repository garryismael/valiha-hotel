import { ClientRequestDto } from "@/domain/use-cases/contact";
import {
    BreakfastRequestDto,
    ReservationRequestDto,
    ReservationService,
    ShuttleRequestDto,
} from "@/domain/use-cases/reservation";
import { injectable } from "tsyringe";
import http from "../config/axios";

export type ReservationRequest = {
  roomIds: string[];
  checkIn: string;
  checkOut: string;
  parking: boolean;
  pax: number;
  client: ClientRequestDto;
  shuttles: ShuttleRequestDto[];
  breakfasts: BreakfastRequestDto[];
};

const RESERVATION_PATH = "/RESERVATIONS-SERVICE/reservations";
@injectable()
export class ReservationServiceImpl implements ReservationService {
  async create(request: ReservationRequestDto): Promise<void> {
    await http.post(`${RESERVATION_PATH}`, this.cast(request));
  }

  private cast(request: ReservationRequestDto): ReservationRequest {
    return {
      roomIds: request.rooms.map((room) => room.id),
      checkIn: request.checkIn,
      checkOut: request.checkOut,
      parking: request.parking,
      pax: request.pax,
      client: request.client,
      shuttles: request.shuttles,
      breakfasts: request.breakfasts,
    };
  }
}
