import { ClientRequestDto } from "@/domain/use-cases/contact";
import {
  ReservationRequestDto,
  ReservationService,
} from "@/domain/use-cases/reservation";
import { injectable } from "tsyringe";
import http from "../config/axios";
import { dateToString } from "../utils/date";

export interface ShuttleRequest {
  flightName: string;
  flightNumber: string;
  destination: string;
  date: string;
}

export interface BreakfastRequest {
  date: string;
}
export type ReservationRequest = {
  roomIds: string[];
  checkIn: string;
  checkOut: string;
  parking: boolean;
  pax: number;
  client: ClientRequestDto;
  shuttles: ShuttleRequest[];
  breakfasts: BreakfastRequest[];
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
      shuttles: request.shuttles.map((shuttle) => ({
        destination: shuttle.destination,
        date: dateToString(shuttle.date),
        flightName: shuttle.flightName,
        flightNumber: shuttle.flightNumber,
      })),
      breakfasts: request.breakfasts.map((breakfast) => ({
        date: dateToString(breakfast.date),
      })),
    };
  }
}
