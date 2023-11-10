import { inject, injectable } from "tsyringe";
import { Shuttle } from "../entities/shuttle";

export interface ShuttleBaseRequest {
  flightName: string;
  flightNumber: string;
  destination: string;
  date: Date;
}

export interface ShuttleRequest extends ShuttleBaseRequest {
  state: string;
}

export interface ShuttleService {
  create(reservationId: string, request: ShuttleBaseRequest): Promise<Shuttle>;
  edit(id: string, request: ShuttleRequest): Promise<Shuttle>;
  delete(id: string): Promise<void>;
}

export interface CreateShuttleUseCase {
  execute(reservationId: string, request: ShuttleBaseRequest): Promise<Shuttle>;
}

export interface EditShuttleUseCase {
  execute(id: string, request: ShuttleRequest): Promise<Shuttle>;
}

export interface DeleteShuttleUseCase {
  execute(id: string): Promise<void>;
}

@injectable()
export class CreateShuttleInteractor implements CreateShuttleUseCase {
  constructor(
    @inject("ShuttleService") private shuttleService: ShuttleService
  ) {}

  execute(
    reservationId: string,
    request: ShuttleBaseRequest
  ): Promise<Shuttle> {
    return this.shuttleService.create(reservationId, request);
  }
}

@injectable()
export class EditShuttleInteractor implements EditShuttleUseCase {
  constructor(
    @inject("ShuttleService") private shuttleService: ShuttleService
  ) {}
  execute(id: string, request: ShuttleRequest): Promise<Shuttle> {
    return this.shuttleService.edit(id, request);
  }
}

@injectable()
export class DeleteShuttleInteractor implements DeleteShuttleUseCase {
  constructor(
    @inject("ShuttleService") private shuttleService: ShuttleService
  ) {}
  execute(id: string): Promise<void> {
    return this.shuttleService.delete(id);
  }
}
