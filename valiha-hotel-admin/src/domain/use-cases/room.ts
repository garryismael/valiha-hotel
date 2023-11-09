import { inject, injectable } from "tsyringe";
import { Room } from "../entities/room";

export interface RoomRequest {
  title: string;
  price: number;
  available: boolean;
  categoryId: string;
  file: File | null;
}

export interface RoomService {
  findAll(): Promise<Room[]>;
  findOne(id: string): Promise<Room>;
  create(request: RoomRequest): Promise<Room>;
  edit(id: string, request: RoomRequest): Promise<Room>;
  delete(id: string): Promise<void>;
}

export interface CreateRoomUseCase {
  execute(request: RoomRequest): Promise<Room>;
}

export interface GetRoomsUseCase {
  execute(): Promise<Room[]>;
}

export interface FindRoomUseCase {
  execute(id: string): Promise<Room>;
}

export interface EditRoomUseCase {
  execute(id: string, request: RoomRequest): Promise<Room>;
}

export interface DeleteRoomUseCase {
  execute(id: string): Promise<void>;
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

@injectable()
export class FindRoomInteractor implements FindRoomUseCase {
  constructor(@inject("RoomService") private roomService: RoomService) {}
  execute(id: string): Promise<Room> {
    return this.roomService.findOne(id);
  }
}

@injectable()
export class EditRoomInteractor implements EditRoomUseCase {
  constructor(@inject("RoomService") private roomService: RoomService) {}
  execute(id: string, request: RoomRequest): Promise<Room> {
    return this.roomService.edit(id, request);
  }
}

@injectable()
export class DeleteRoomInteractor implements DeleteRoomUseCase {
  constructor(@inject("RoomService") private roomService: RoomService) {}
  execute(id: string): Promise<void> {
    return this.roomService.delete(id);
  }
}
