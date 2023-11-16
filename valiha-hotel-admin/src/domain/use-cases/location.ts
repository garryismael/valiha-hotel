import { inject, injectable } from "tsyringe";
import { Location } from "../entities/location";

export interface LocationService {
  findAll(): Promise<Location[]>;
}

export interface GetLocationsUseCase {
  execute(): Promise<Location[]>;
}

@injectable()
export class GetLocationInteractor implements GetLocationsUseCase {
  constructor(
    @inject("LocationService") private locationService: LocationService
  ) {}

  execute(): Promise<Location[]> {
    return this.locationService.findAll();
  }
}
