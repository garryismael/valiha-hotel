import { Location } from "@/domain/entities/location";
import { LocationRequest, LocationService } from "@/domain/use-cases/location";
import http from "@/lib/axios";
import { injectable } from "tsyringe";

const LOCATION_PATH = "/LOCATIONS-SERVICE/locations";

@injectable()
export class LocationServiceImpl implements LocationService {
  async edit(id: string, data: LocationRequest): Promise<Location> {
    const response = await http.put<Location>(`${LOCATION_PATH}/${id}`, data);
    return response.data;
  }
  async findAll(): Promise<Location[]> {
    const response = await http.get<Location[]>(`${LOCATION_PATH}`);
    return response.data;
  }
}
