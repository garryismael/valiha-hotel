import { Blog } from "@/domain/entities/blog";
import { BlogService } from "@/domain/use-cases/blog";
import http from "../config/axios";
import { injectable } from "tsyringe";

@injectable()
export class BlogServiceImpl implements BlogService {
  async findAll(): Promise<Blog[]> {
    const response = await http.get<Blog[]>("/USERS-SERVICES/blogs");
    return response.data;
  }
}
