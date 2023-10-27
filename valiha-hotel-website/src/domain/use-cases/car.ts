import { inject, injectable } from "tsyringe";
import { Car } from "../entities/car";

export interface CarService {
  findAll(): Promise<Car[]>;
}

export interface GetCarsUseCase {
  execute(): Promise<Car[]>;
}

@injectable()
export class GetCarsInteractor implements GetCarsUseCase {
  constructor(@inject("CarService") private carService: CarService) {}

  execute(): Promise<Car[]> {
    return this.carService.findAll();
  }
}
