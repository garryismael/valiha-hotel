import { Shuttle } from "@/domain/entities/shuttle";
import {
    ShuttleBaseRequest,
    ShuttleRequest,
    ShuttleService,
} from "@/domain/use-cases/shuttle";
import http from "@/lib/axios";
import { dateToString } from "@/lib/utils/date";
import { RESERVATION_PATH } from "./reservation";
import { DATE_TIME_FORMAT } from "@/constants/date";

const SHUTTLE_PATH = "/RESERVATIONS-SERVICE/shuttles";

export class ShuttleServiceImpl implements ShuttleService {
  async create(
    reservationId: string,
    request: ShuttleBaseRequest
  ): Promise<Shuttle> {
    const response = await http.post<Shuttle>(
      `${RESERVATION_PATH}/${reservationId}/shuttles`,
      this.castBaseRequest(request)
    );
    return response.data;
  }

  async edit(id: string, request: ShuttleRequest): Promise<Shuttle> {
    const response = await http.put<Shuttle>(
      `${SHUTTLE_PATH}/${id}`,
      this.castRequest(request)
    );
    return response.data;
  }

  async delete(id: string, reservationId: string): Promise<void> {
    await http.delete(`${SHUTTLE_PATH}/${id}/${reservationId}`);
  }

  private castBaseRequest(request: ShuttleBaseRequest) {
    return {
      date: dateToString(request.date, DATE_TIME_FORMAT),
      destination: request.destination,
      flightName: request.flightName,
      flightNumber: request.flightNumber,
    };
  }

  private castRequest(request: ShuttleRequest) {
    const data = this.castBaseRequest(request);
    return {
      ...data,
      state: request.state,
    };
  }
}
