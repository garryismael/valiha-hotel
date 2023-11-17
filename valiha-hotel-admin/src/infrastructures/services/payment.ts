import { Payment } from "@/domain/entities/payment";
import { Reservation } from "@/domain/entities/reservation";
import { PaymentRequest, PaymentService } from "@/domain/use-cases/payment";
import http from "@/lib/axios";
import { RESERVATION_PATH } from "./reservation";

const PAYMENT_PATH = "PAYMENTS-SERVICE/payments";

export class PaymentServiceImpl implements PaymentService {
  async edit(id: string, request: PaymentRequest): Promise<Payment> {
    console.log(request);
    const response = await http.put<Payment>(`${PAYMENT_PATH}/${id}`, request);
    return response.data;
  }

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
