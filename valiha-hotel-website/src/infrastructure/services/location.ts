import { LocationRequest, LocationService } from "@/domain/use-cases/location";
import { injectable } from "tsyringe";
import http from "../config/axios";

@injectable()
export class LocationServiceImpl implements LocationService {
  async create(request: LocationRequest): Promise<void> {
    await http.post("/LOCATIONS-SERVICE/locations", request);
  }
}
