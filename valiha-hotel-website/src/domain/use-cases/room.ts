import { inject, injectable } from "tsyringe";
import { Room } from "../entities/room";

export interface RoomService {
  findAll(): Promise<Room[]>;
  findRoomsAvailable(checkIn: string, checkOut: string): Promise<Room[]>;
}

export interface GetRoomsUseCase {
  execute(): Promise<Room[]>;
}

export interface GetAvailableRoomsUseCase {
  execute(checkInt: string, checkOut: string): Promise<Room[]>;
}

@injectable()
export class GetRoomsInteractor implements GetRoomsUseCase {
  constructor(@inject("RoomService") private roomService: RoomService) {}

  execute(): Promise<Room[]> {
    return this.roomService.findAll();
  }
}

@injectable()
export class GetAvailableRoomsInteractor implements GetAvailableRoomsUseCase {
  constructor(@inject("RoomService") private roomService: RoomService) {}
  execute(checkIn: string, checkOut: string): Promise<Room[]> {
    return this.roomService.findRoomsAvailable(checkIn, checkOut);
  }
}
