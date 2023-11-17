import { inject, injectable } from "tsyringe";
import { Location } from "../entities/location";

export interface LocationRequest {
  state: string;
  start: string;
  end: string;
  destination: string;
  reason: string;
  carIds: string[];
}

export interface LocationService {
  findAll(): Promise<Location[]>;
  edit(id: string, data: LocationRequest): Promise<Location>;
  findOneById(id: string): Promise<Location>;
}

export interface GetLocationsUseCase {
  execute(): Promise<Location[]>;
}

export interface FindLocationUseCase {
  execute(id: string): Promise<Location>;
}

export interface EditLocationUseCase {
  execute(id: string, data: LocationRequest): Promise<Location>;
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

@injectable()
export class EditLocationInteractor implements EditLocationUseCase {
  constructor(
    @inject("LocationService") private locationService: LocationService
  ) {}
  execute(id: string, data: LocationRequest): Promise<Location> {
    return this.locationService.edit(id, data);
  }
}

@injectable()
export class FindLocationInteractor implements FindLocationUseCase {
  constructor(
    @inject("LocationService") private locationService: LocationService
  ) {}
  execute(id: string): Promise<Location> {
    return this.locationService.findOneById(id);
  }
}
