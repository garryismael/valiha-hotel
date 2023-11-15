import { LocationRequest, LocationService } from "@/domain/use-cases/location";
import { injectable } from "tsyringe";
import http from "../config/axios";
import { ClientRequestDto } from "@/domain/use-cases/contact";
import { dateToString } from "../utils/date";
import axios from "axios";

export interface LocationForm {
  start: string;
  end: string;
  destination: string;
  reason: string;
  client: ClientRequestDto;
  carId: string;
}
@injectable()
export class LocationServiceImpl implements LocationService {
  async create(request: LocationRequest): Promise<void> {
    await axios.post("http://localhost:5001/locations", this.cast(request));
  }

  private cast(request: LocationRequest): LocationForm {
    return {
      carId: request.carId,
      client: request.client,
      destination: request.destination,
      end: dateToString(request.end),
      start: dateToString(request.start),
      reason: request.reason,
    };
  }
}
