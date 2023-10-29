import { inject, injectable } from "tsyringe";
import { Car } from "../entities/car";

export interface CarService {
  findAll(): Promise<Car[]>;
  findOne(id: string): Promise<Car>;
}

export interface GetCarsUseCase {
  execute(): Promise<Car[]>;
}

export interface GetCarUseCase {
  execute(id: string): Promise<Car>;
}

@injectable()
export class GetCarsInteractor implements GetCarsUseCase {
  constructor(@inject("CarService") private carService: CarService) {}

  execute(): Promise<Car[]> {
    return this.carService.findAll();
  }
}

@injectable()
export class GetCarInteractor implements GetCarUseCase {
  constructor(@inject("CarService") private carService: CarService) {}
  execute(id: string): Promise<Car> {
    return this.carService.findOne(id);
  }
}
