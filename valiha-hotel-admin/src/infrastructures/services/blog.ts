import { multipart } from "@/constants/axios";
import { Blog } from "@/domain/entities/blog";
import { BlogRequest, BlogService } from "@/domain/use-cases/blog";
import http, { httpClient } from "@/lib/axios";
import { injectable } from "tsyringe";

const BLOG_PATH = "USERS-SERVICE/blogs";

@injectable()
export class BlogServiceImpl implements BlogService {
  async create(request: BlogRequest): Promise<Blog> {
    const response = await http.post<Blog>(
      BLOG_PATH,
      this.cast(request),
      multipart
    );
    return response.data;
  }

  async findAll(): Promise<Blog[]> {
    const response = await httpClient.get<Blog[]>(BLOG_PATH);
    return response.data;
  }

  async findOne(id: string): Promise<Blog> {
    const response = await httpClient.get<Blog>(`${BLOG_PATH}/${id}`);
    return response.data;
  }

  async edit(id: string, request: BlogRequest): Promise<Blog> {
    const response = await http.put<Blog>(
      `${BLOG_PATH}/${id}`,
      this.cast(request),
      multipart
    );
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await http.delete<Blog>(`${BLOG_PATH}/${id}`);
  }

  private cast(request: BlogRequest) {
    const data = new FormData();
    data.append("title", request.title);
    data.append("text", request.text);
    data.append("image", request.file as File);
    return data;
  }
}
