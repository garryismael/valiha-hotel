import { inject, injectable } from "tsyringe";
import { Car } from "../entities/car";

export interface CarRequest {
  mark: string;
  training: number;
  mileage: number;
  door: number;
  place: number;
  year: number;
  price: number;
  image: File | null;
}

export interface CarService {
  findAll(): Promise<Car[]>;
  create(request: CarRequest): Promise<Car>;
}

export interface GetCarsUseCase {
  execute(): Promise<Car[]>;
}

export interface CreateCarUseCase {
  execute(request: CarRequest): Promise<Car>;
}

@injectable()
export class GetCarsInteractor implements GetCarsUseCase {
  constructor(@inject("CarService") private carService: CarService) {}

  execute(): Promise<Car[]> {
    return this.carService.findAll();
  }
}

@injectable()
export class CreateCarInteractor implements CreateCarUseCase {
  constructor(@inject("CarService") private carService: CarService) {}
  execute(request: CarRequest): Promise<Car> {
    return this.carService.create(request);
  }
}
