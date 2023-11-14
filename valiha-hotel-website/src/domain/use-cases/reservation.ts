import { inject, injectable } from "tsyringe";
import { Room } from "../entities/room";

export interface ReservationRequestDto {
  rooms: Room[];
  checkIn: string;
  checkOut: string;
  parking: boolean;
  pax: number;
  client: ClientRequestDto;
  shuttles: ShuttleRequestDto[];
  breakfasts: BreakfastRequestDto[];
}

export interface ClientRequestDto {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface ShuttleRequestDto {
  flightName: string;
  flightNumber: string;
  destination: string;
  date: Date;
}

export interface BreakfastRequestDto {
  date: Date;
}

export interface ReservationService {
  create(request: ReservationRequestDto): Promise<void>;
}

export interface CreateReservationUseCase {
  execute(request: ReservationRequestDto): Promise<void>;
}

@injectable()
export class CreateReservationInteractor implements CreateReservationUseCase {
  constructor(
    @inject("ReservationService") private contactService: ReservationService
  ) {}

  execute(request: ReservationRequestDto) {
    return this.contactService.create(request);
  }
}
