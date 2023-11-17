import { ClientRequestDto } from "@/domain/use-cases/contact";
import { LocationRequest, LocationService } from "@/domain/use-cases/location";
import axios from "axios";
import { injectable } from "tsyringe";
import { dateToString } from "../utils/date";

export interface LocationForm {
  start: string;
  end: string;
  destination: string;
  reason: string;
  client: ClientRequestDto;
  carIds: string[];
}

const LOCATION_PATH = "LOCATIONS-SERVICE/locations";
@injectable()
export class LocationServiceImpl implements LocationService {
  async create(request: LocationRequest): Promise<void> {
    await axios.post(LOCATION_PATH, this.cast(request));
  }

  private cast(request: LocationRequest): LocationForm {
    return {
      carIds: [request.carId],
      client: request.client,
      destination: request.destination,
      end: dateToString(request.end),
      start: dateToString(request.start),
      reason: request.reason,
    };
  }
}
