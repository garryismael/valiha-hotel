import { inject, injectable } from "tsyringe";
import { ClientRequestDto } from "./reservation";

export interface LocationRequest {
  start: Date;
  end: Date;
  destination: string;
  reason: string;
  client: ClientRequestDto;
  carId: string;
}

export interface LocationService {
  create(request: LocationRequest): Promise<void>;
}

export interface CreateLocationUseCase {
  execute(request: LocationRequest): Promise<void>;
}

@injectable()
export class CreateLocationInteractor implements CreateLocationUseCase {
  constructor(
    @inject("LocationService") private locationService: LocationService
  ) {}

  async execute(request: LocationRequest): Promise<void> {
    await this.locationService.create(request);
  }
}
