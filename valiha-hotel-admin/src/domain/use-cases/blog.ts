import { inject, injectable } from "tsyringe";
import { Blog } from "../entities/blog";

export interface BlogRequest {
  title: string;
  text: string;
  file: File | null;
}

export interface CreateBlogUseCase {
  execute(requestDto: BlogRequest, image: File | null): Promise<Blog>;
}

export interface DeleteBlogUseCase {
  execute(id: string): Promise<void>;
}

export interface EditBlogUseCase {
  execute(
    id: string,
    requestDto: BlogRequest,
    file: File | null
  ): Promise<Blog>;
}

export interface GetBlogsUseCase {
  execute(): Promise<Blog[]>;
}

export interface FindOneBlogUseCase {
  execute(id: string): Promise<Blog>;
}

export interface BlogService {
  create(request: BlogRequest): Promise<Blog>;
  findAll(): Promise<Blog[]>;
  findOne(id: string): Promise<Blog>;
  edit(id: string, request: BlogRequest): Promise<Blog>;
  delete(id: string): Promise<void>;
}

@injectable()
export class CreateBlogInteractor implements CreateBlogUseCase {
  constructor(@inject("BlogService") private blogService: BlogService) {}

  execute(requestDto: BlogRequest, file: File): Promise<Blog> {
    return this.blogService.create(requestDto);
  }
}

@injectable()
export class GetBlogsInteractor implements GetBlogsUseCase {
  constructor(@inject("BlogService") private blogService: BlogService) {}

  execute(): Promise<Blog[]> {
    return this.blogService.findAll();
  }
}

@injectable()
export class FindBlogInteractor implements FindOneBlogUseCase {
  constructor(@inject("BlogService") private blogService: BlogService) {}
  execute(id: string): Promise<Blog> {
    return this.blogService.findOne(id);
  }
}

@injectable()
export class EditBlogInteractor implements EditBlogUseCase {
  constructor(@inject("BlogService") private blogService: BlogService) {}
  execute(
    id: string,
    requestDto: BlogRequest,
    file: File | null
  ): Promise<Blog> {
    return this.blogService.edit(id, requestDto);
  }
}

@injectable()
export class DeleteBlogInteractor implements DeleteBlogUseCase {
  constructor(@inject("BlogService") private blogService: BlogService) {}
  execute(id: string): Promise<void> {
    return this.blogService.delete(id);
  }
}
