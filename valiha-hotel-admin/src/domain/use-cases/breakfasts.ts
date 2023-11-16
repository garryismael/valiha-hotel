import { inject, injectable } from "tsyringe";
import { Breakfast } from "../entities/breakfast";

export interface BreakfastBaseRequest {
  date: Date;
}

export interface BreakfastRequest extends BreakfastBaseRequest {
  state: string;
}

export interface BreakfastService {
  create(
    reservationId: string,
    request: BreakfastBaseRequest
  ): Promise<Breakfast>;
  edit(id: string, request: BreakfastRequest): Promise<Breakfast>;
  delete(id: string, reservationId: string): Promise<void>;
}

export interface CreateBreakfastUseCase {
  execute(
    reservationId: string,
    request: BreakfastBaseRequest
  ): Promise<Breakfast>;
}

export interface EditBreakfastUseCase {
  execute(id: string, request: BreakfastRequest): Promise<Breakfast>;
}

export interface DeleteBreakfastUseCase {
  execute(id: string, reservationId: string): Promise<void>;
}

@injectable()
export class CreateBreakfastInteractor implements CreateBreakfastUseCase {
  constructor(
    @inject("BreakfastService") private breakfastService: BreakfastService
  ) {}

  execute(
    reservationId: string,
    request: BreakfastBaseRequest
  ): Promise<Breakfast> {
    return this.breakfastService.create(reservationId, request);
  }
}

@injectable()
export class EditBreakfastInteractor implements EditBreakfastUseCase {
  constructor(
    @inject("BreakfastService") private breakfastService: BreakfastService
  ) {}
  execute(id: string, request: BreakfastRequest): Promise<Breakfast> {
    return this.breakfastService.edit(id, request);
  }
}

@injectable()
export class DeleteBreakfastInteractor implements DeleteBreakfastUseCase {
  constructor(
    @inject("BreakfastService") private breakfastService: BreakfastService
  ) {}
  execute(id: string, reservationId: string): Promise<void> {
    return this.breakfastService.delete(id, reservationId);
  }
}
