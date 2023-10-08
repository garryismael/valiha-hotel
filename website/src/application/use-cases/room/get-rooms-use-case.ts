import { Room } from "@/core/entities/models/Room";

export interface FindAllRoomsUseCase {
  execute(): Promise<Room[]>;
}
