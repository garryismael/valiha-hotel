import { Room } from "@/domain/entities/room";
import { RoomRequest, RoomService } from "@/domain/use-cases/room";
import http, { httpClient } from "@/lib/axios";
import { injectable } from "tsyringe";

@injectable()
export class RoomServiceImpl implements RoomService {
  async findAll(): Promise<Room[]> {
    const response = await httpClient.get<Room[]>(
      "/RESERVATIONS-SERVICE/rooms"
    );
    return response.data;
  }

  async create(request: RoomRequest): Promise<Room> {
    const data = new FormData();
    data.append("title", request.title);
    data.append("price", request.price.toString());
    data.append("categoryId", request.categoryId);
    data.append("image", request.file as File);

    const response = await http.post<Room>(
      "/RESERVATIONS-SERVICE/rooms",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  }
}
