import "reflect-metadata";

import { container } from "tsyringe";
import { CarServiceImpl } from "../services/car";
import { CategoryServiceImpl } from "../services/category";
import { RoomServiceImpl } from "../services/room";

container.register("CategoryService", {
  useClass: CategoryServiceImpl,
});

container.register("RoomService", {
  useClass: RoomServiceImpl,
});

container.register("CarService", {
  useClass: CarServiceImpl,
});

export default container;
