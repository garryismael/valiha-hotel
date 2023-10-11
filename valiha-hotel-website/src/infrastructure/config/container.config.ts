import "reflect-metadata";

import { container } from "tsyringe";
import { BlogServiceImpl } from "../services/blog";
import { CategoryServiceImpl } from "../services/category";

container.register("BlogService", {
  useClass: BlogServiceImpl,
});

container.register("CategoryService", {
  useClass: CategoryServiceImpl,
});

export default container;
