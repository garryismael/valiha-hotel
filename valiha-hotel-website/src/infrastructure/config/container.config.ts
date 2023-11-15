import "reflect-metadata";

import { container } from "tsyringe";
import { BlogServiceImpl } from "../services/blog";
import { CarServiceImpl } from "../services/car";
import { CategoryServiceImpl } from "../services/category";
import { ContactServiceImpl } from "../services/contact";
import { LocationServiceImpl } from "../services/location";
import { ReservationServiceImpl } from "../services/reservation";
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
  useClass: LocationServiceImpl,
});

container.register("ReservationService", {
  useClass: ReservationServiceImpl,
});

container.register("ContactService", {
  useClass: ContactServiceImpl,
});
export default container;
