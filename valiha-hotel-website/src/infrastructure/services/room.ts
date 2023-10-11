import { Room } from "@/domain/entities/room";
import http from "../config/axios";
import { AvailableRoomRequestDto, RoomService } from "@/domain/use-cases/room";
import { injectable } from "tsyringe";

@injectable()
export class RoomServiceImpl implements RoomService {
  async findRoomsAvailable(request: AvailableRoomRequestDto): Promise<Room[]> {
    const response = await http.get<Room[]>("/USERS-SERVICES/rooms/available", {
      params: {
        ...request,
      },
    });
    return response.data;
  }
  async findAll(): Promise<Room[]> {
    const response = await http.get<Room[]>("/USERS-SERVICES/rooms");
    return response.data;
  }
}
