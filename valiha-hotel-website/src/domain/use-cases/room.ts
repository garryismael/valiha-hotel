import { inject, injectable } from "tsyringe";
import { Room } from "../entities/room";

export interface AvailableRoomRequestDto {
  checkIn: string;
  checkOut: string;
}

export interface RoomService {
  findAll(): Promise<Room[]>;
  findRoomsAvailable(
    availableRoomRequest: AvailableRoomRequestDto
  ): Promise<Room[]>;
}

export interface GetRoomsUseCase {
  execute(): Promise<Room[]>;
}

@injectable()
export class GetRoomsInteractor implements GetRoomsUseCase {
  constructor(@inject("RoomService") private blogService: RoomService) {}

  execute(): Promise<Room[]> {
    return this.blogService.findAll();
  }
}
