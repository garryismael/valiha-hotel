import { Car } from "@/domain/entities/car";
import { CarService } from "@/domain/use-cases/car";
import { injectable } from "tsyringe";
import http from "../config/axios";

@injectable()
export class CarServiceImpl implements CarService {
  async findAll(): Promise<Car[]> {
    const response = await http.get<Car[]>("/LOCATIONS-SERVICE/cars");
    return response.data;
  }
}
