import type { RoomService } from "@/application/service/room";
import { FindAllRoomsUseCase } from "@/application/use-cases/room/get-rooms-use-case";
import { Room } from "@/core/entities/models/Room";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindAllRoomsInteractor implements FindAllRoomsUseCase {
  constructor(@inject("RoomService") private roomService: RoomService) {}

  execute(): Promise<Room[]> {
    return this.roomService.findAll();
  }
}
