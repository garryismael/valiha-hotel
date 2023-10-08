import { Room } from "@/core/entities/models/Room";

export interface RoomService {
    findAll(): Promise<Room[]>;
}
