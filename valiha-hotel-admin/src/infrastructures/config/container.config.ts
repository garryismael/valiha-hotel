import "reflect-metadata";

import { container } from "tsyringe";
import { CategoryServiceImpl } from "../services/category";

container.register("CategoryService", {
  useClass: CategoryServiceImpl,
});

export default container;
