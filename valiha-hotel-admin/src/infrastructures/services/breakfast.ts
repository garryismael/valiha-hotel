import { Breakfast } from "@/domain/entities/breakfast";
import {
  BreakfastBaseRequest,
  BreakfastRequest,
  BreakfastService,
} from "@/domain/use-cases/breakfasts";
import http from "@/lib/axios";
import { dateToString } from "@/lib/utils/date";
import { RESERVATION_PATH } from "./reservation";


const BREAKFASTS_PATH = "/RESERVATIONS-SERVICE/breakfasts";

export class BreakfastServiceImpl implements BreakfastService {
  async create(
    reservationId: string,
    request: BreakfastBaseRequest
  ): Promise<Breakfast> {
    const response = await http.post<Breakfast>(
      `${RESERVATION_PATH}/${reservationId}/breakfasts`,
      { date: dateToString(request.date) }
    );
    return response.data;
  }

  async edit(id: string, request: BreakfastRequest): Promise<Breakfast> {
    const response = await http.put<Breakfast>(`${BREAKFASTS_PATH}/${id}`, {
      date: dateToString(request.date),
      state: request.state,
    });
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await http.delete(`${BREAKFASTS_PATH}/${id}`); 
  }
}
