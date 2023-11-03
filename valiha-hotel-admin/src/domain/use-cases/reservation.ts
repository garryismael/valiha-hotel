import { inject, injectable } from "tsyringe";
import { Reservation } from "../entities/reservation";

export interface ReservationService {
  findAll(): Promise<Reservation[]>;
}

export interface FindReservationsUseCase {
  execute(): Promise<Reservation[]>;
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
