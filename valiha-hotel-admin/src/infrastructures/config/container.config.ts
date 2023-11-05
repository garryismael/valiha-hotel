import "reflect-metadata";

import { container } from "tsyringe";
import { CarServiceImpl } from "../services/car";
import { CategoryServiceImpl } from "../services/category";
import { RoomServiceImpl } from "../services/room";
import { UserServiceImpl } from "../services/user";
import { ReservationServiceImpl } from "../services/reservation";
import { ClientServiceImpl } from "../services/client";
import { BlogServiceImpl } from "../services/blog";

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

container.register("ReservationService", {
  useClass: ReservationServiceImpl,
});

container.register("ClientService", {
  useClass: ClientServiceImpl,
});

container.register("BlogService", {
  useClass: BlogServiceImpl,
});
export default container;
