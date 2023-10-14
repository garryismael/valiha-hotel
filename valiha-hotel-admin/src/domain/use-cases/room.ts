import { inject, injectable } from "tsyringe";
import { Room } from "../entities/room";

export interface RoomRequest {
  title: string;
  price: number;
  categoryId: string;
  file: File | null;
}

export interface RoomService {
  findAll(): Promise<Room[]>;
  create(request: RoomRequest): Promise<Room>;
}

export interface GetRoomsUseCase {
  execute(): Promise<Room[]>;
}

export interface CreateRoomUseCase {
  execute(request: RoomRequest): Promise<Room>;
}

@injectable()
export class GetRoomsInteractor implements GetRoomsUseCase {
  constructor(@inject("RoomService") private roomService: RoomService) {}

  execute(): Promise<Room[]> {
    return this.roomService.findAll();
  }
}

@injectable()
export class CreateRoomInteractor implements CreateRoomUseCase {
  constructor(@inject("RoomService") private roomService: RoomService) {}
  execute(request: RoomRequest): Promise<Room> {
    return this.roomService.create(request);
  }
}
