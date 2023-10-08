import "reflect-metadata";

import { CategoryService } from "@/application/service/category";
import { CategoryServiceImpl } from "@/infrastructure/service/category";
import { container } from "tsyringe";

container.register<CategoryService>("CategoryService", {
  useClass: CategoryServiceImpl,
});
