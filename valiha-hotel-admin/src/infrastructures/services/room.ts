import { multipart } from "@/constants/axios";
import { Room } from "@/domain/entities/room";
import { RoomRequest, RoomService } from "@/domain/use-cases/room";
import http, { httpClient } from "@/lib/axios";
import { injectable } from "tsyringe";

const ROOM_PATH = "/RESERVATIONS-SERVICE/rooms";
@injectable()
export class RoomServiceImpl implements RoomService {
  async findOne(id: string): Promise<Room> {
    const response = await httpClient.get<Room>(`${ROOM_PATH}/${id}`);
    return response.data;
  }

  async edit(id: string, request: RoomRequest): Promise<Room> {
    const response = await http.put<Room>(
      `${ROOM_PATH}/${id}`,
      this.cast(request),
      multipart
    );
    return response.data;
  }

  async delete(id: string): Promise<void> {
    await http.delete(`${ROOM_PATH}/${id}`);
  }

  async findAll(): Promise<Room[]> {
    const response = await httpClient.get<Room[]>(ROOM_PATH);
    return response.data;
  }

  async create(request: RoomRequest): Promise<Room> {
    const response = await http.post<Room>(
      ROOM_PATH,
      this.cast(request),
      multipart
    );

    return response.data;
  }

  private cast(request: RoomRequest) {
    const data = new FormData();
    data.append("title", request.title);
    data.append("price", request.price.toString());
    data.append("categoryId", request.categoryId);
    data.append("image", request.file as File);
    return data;
  }
}
