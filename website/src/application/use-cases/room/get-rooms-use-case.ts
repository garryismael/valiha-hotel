import { RoomResponseDto } from "@/application/dto/room/room-response";

export interface getRoomsUseCase {
    execute(): Array<RoomResponseDto>;
}
