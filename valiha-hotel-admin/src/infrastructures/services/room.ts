import { Room } from "@/domain/entities/room";
import { RoomRequest, RoomService } from "@/domain/use-cases/room";
import http from "@/lib/axios";
import { injectable } from "tsyringe";

@injectable()
export class RoomServiceImpl implements RoomService {
  async findAll(): Promise<Room[]> {
    const response = await http.get<Room[]>(
      "/RESERVATIONS-SERVICE/rooms"
    );
    return response.data;
  }

  create(request: RoomRequest): Promise<Room> {
    throw new Error("Method not implemented.");
}
}
