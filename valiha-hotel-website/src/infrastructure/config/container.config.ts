import "reflect-metadata";

import { container } from "tsyringe";
import { BlogServiceImpl } from "../services/blog";
import { CategoryServiceImpl } from "../services/category";
import { RoomServiceImpl } from "../services/room";

container.register("BlogService", {
  useClass: BlogServiceImpl,
});

container.register("CategoryService", {
  useClass: CategoryServiceImpl,
});

container.register("RoomService", {
  useClass: RoomServiceImpl
});

export default container;
