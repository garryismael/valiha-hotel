import "reflect-metadata";

import { container } from "tsyringe";
import { BlogServiceImpl } from "../services/blog";
import { CarServiceImpl } from "../services/car";
import { CategoryServiceImpl } from "../services/category";
import { LocationServiceImpl } from '../services/location';
import { RoomServiceImpl } from "../services/room";

container.register("BlogService", {
  useClass: BlogServiceImpl,
});

container.register("CategoryService", {
  useClass: CategoryServiceImpl,
});

container.register("RoomService", {
  useClass: RoomServiceImpl,
});

container.register("CarService", {
  useClass: CarServiceImpl,
});

container.register("LocationService", {
  useClass: LocationServiceImpl
})
export default container;
