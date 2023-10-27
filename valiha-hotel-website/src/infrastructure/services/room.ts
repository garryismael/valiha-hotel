import { Room } from "@/domain/entities/room";
import http from "../config/axios";
import { RoomService } from "@/domain/use-cases/room";
import { injectable } from "tsyringe";

@injectable()
export class RoomServiceImpl implements RoomService {
  async findRoomsAvailable(checkIn: string, checkOut: string): Promise<Room[]> {
    const response = await http.get<Room[]>("/RESERVATIONS-SERVICE/rooms/available", {
      params: {
        checkIn,
        checkOut,
      },
    });
    return response.data;
  }
  
  async findAll(): Promise<Room[]> {
    const response = await http.get<Room[]>("/RESERVATIONS-SERVICE/rooms");
    return response.data;
  }
}
