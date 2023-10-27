import { Car } from "@/domain/entities/car";
import { CarRequest, CarService } from "@/domain/use-cases/car";
import { httpClient } from "@/lib/axios";
import { injectable } from "tsyringe";

@injectable()
export class CarServiceImpl implements CarService {
  async findAll(): Promise<Car[]> {
    const response = await httpClient.get<Car[]>("/LOCATIONS-SERVICE/cars");
    return response.data;
  }

  create(request: CarRequest): Promise<Car> {
    throw new Error("Method not implemented.");
  }
}
