import "reflect-metadata";

import { container } from "tsyringe";
import { CategoryServiceImpl } from "../services/category";
import { RoomServiceImpl } from "../services/room";

container.register("CategoryService", {
  useClass: CategoryServiceImpl,
});

container.register("RoomService", {
  useClass: RoomServiceImpl,
});

export default container;
