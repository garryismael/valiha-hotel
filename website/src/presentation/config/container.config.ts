import "reflect-metadata";

import { CategoryService } from "@/application/service/category";
import { CategoryServiceImpl } from "@/infrastructure/service/category";
import { container } from "tsyringe";
import { RoomService } from "@/application/service/room";
import { RoomServiceImpl } from "@/infrastructure/service/room";

container.register<CategoryService>("CategoryService", {
  useClass: CategoryServiceImpl,
});


container.register<RoomService>("RoomService", {
  useClass: RoomServiceImpl
})
