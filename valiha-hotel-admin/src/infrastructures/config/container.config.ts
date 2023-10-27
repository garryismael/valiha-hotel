import "reflect-metadata";

import { container } from "tsyringe";
import { CarServiceImpl } from "../services/car";
import { CategoryServiceImpl } from "../services/category";
import { RoomServiceImpl } from "../services/room";
import { UserServiceImpl } from "../services/user";

container.register("CategoryService", {
  useClass: CategoryServiceImpl,
});

container.register("RoomService", {
  useClass: RoomServiceImpl,
});

container.register("CarService", {
  useClass: CarServiceImpl,
});

container.register("UserService", {
  useClass: UserServiceImpl,
});

export default container;
