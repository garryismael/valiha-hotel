import { Payment } from "@/domain/entities/payment";
import { Reservation } from "@/domain/entities/reservation";
import { PaymentService } from "@/domain/use-cases/payment";
import http from "@/lib/axios";
import { RESERVATION_PATH } from "./reservation";

const PAYMENT_PATH = "PAYMENTS-SERVICE/payments";

export class PaymentServiceImpl implements PaymentService {
  async findAll(): Promise<Payment[]> {
    const response = await http.get<Payment[]>(PAYMENT_PATH);
    return response.data;
  }

  async findReservation(id: string): Promise<Reservation> {
    const response = await http.get<Reservation>(
      `${RESERVATION_PATH}/payments/${id}`
    );
    return response.data;
  }
}
