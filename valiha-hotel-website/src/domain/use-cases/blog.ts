import { inject, injectable } from "tsyringe";
import { Blog } from "../entities/blog";

export interface BlogService {
  findAll(): Promise<Blog[]>;
}

export interface GetBlogsUseCase {
  execute(): Promise<Blog[]>;
}

@injectable()
export class GetBlogsInteractor implements GetBlogsUseCase {
  constructor(@inject("BlogService") private blogService: BlogService) {}

  execute(): Promise<Blog[]> {
    return this.blogService.findAll();
  }
}
