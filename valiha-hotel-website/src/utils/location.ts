import { Car } from "@/domain/entities/car";
import { LocationRequest } from "@/domain/use-cases/location";
import { getDays } from "./date";

export const getLocationPrice = (car: Car, request: LocationRequest) => {
  return car.price * (getDays(request.start, request.end) + 1);
};
