import { inject, injectable } from "tsyringe";
import { Payment } from "../entities/payment";
import { Reservation } from "../entities/reservation";

export interface PaymentService {
  findAll(): Promise<Payment[]>;
  findReservation(id: string): Promise<Reservation>;
}

export interface GetPaymentsUseCase {
  execute(): Promise<Payment[]>;
}

export interface GetReservationUseCase {
  execute(id: string): Promise<Reservation>;
}

@injectable()
export class GetPaymentsInteractor implements GetPaymentsUseCase {
  constructor(
    @inject("PaymentService") private paymentService: PaymentService
  ) {}
  execute(): Promise<Payment[]> {
    return this.paymentService.findAll();
  }
}

@injectable()
export class GetReservationInteractor implements GetReservationUseCase {
  constructor(
    @inject("PaymentService") private paymentService: PaymentService
  ) {}

  execute(id: string): Promise<Reservation> {
    return this.paymentService.findReservation(id);
  }
}