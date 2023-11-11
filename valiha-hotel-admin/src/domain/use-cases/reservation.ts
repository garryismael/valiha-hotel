import { inject, injectable } from "tsyringe";
import { Reservation } from "../entities/reservation";

export interface ReservationBaseRequest {
  roomIds: string[];
  checkIn: string;
  checkOut: string;
  state: string;
  parking: boolean;
  pax: number;
}
export interface ReservationService {
  edit(id: string, request: ReservationBaseRequest): Promise<Reservation>;
  findAll(): Promise<Reservation[]>;
  findOneById(id: string): Promise<Reservation>;
  deleteById(id: string): Promise<void>;
}

export interface EditReservationUseCase {
  execute(id: string, request: ReservationBaseRequest): Promise<Reservation>;
}
export interface FindReservationsUseCase {
  execute(): Promise<Reservation[]>;
}

export interface FindReservationUseCase {
  execute(id: string): Promise<Reservation>;
}

export interface DeleteReservationUseCase {
  execute(id: string): Promise<void>;
}

export class EditReservationInteractor implements EditReservationUseCase {
  constructor(
    @inject("ReservationService") private reservationService: ReservationService
  ) {}
  execute(id: string, request: ReservationBaseRequest): Promise<Reservation> {
    return this.reservationService.edit(id, request);
  }
}
@injectable()
export class FindReservationsInteractor implements FindReservationsUseCase {
  constructor(
    @inject("ReservationService") private reservationService: ReservationService
  ) {}
  execute(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }
}

@injectable()
export class FindReservationInteractor implements FindReservationUseCase {
  constructor(
    @inject("ReservationService") private reservationService: ReservationService
  ) {}
  execute(id: string): Promise<Reservation> {
    return this.reservationService.findOneById(id);
  }
}

@injectable()
export class DeleteReservationInteractor implements DeleteReservationUseCase {
  constructor(
    @inject("ReservationService") private reservationService: ReservationService
  ) {}
  execute(id: string): Promise<void> {
    return this.reservationService.deleteById(id);
  }
}
