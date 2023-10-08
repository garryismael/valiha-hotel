import { CategoryResponseDto } from "@/application/dto/category/category-response";
import CATEGORY_VALUES, {
  ROOM_VALUES,
} from "@/core/entities/constants/entity-data";
import { Category } from "@/core/entities/models/Category";
import { injectable } from "tsyringe";
import { HttpClient } from "../config/axios";
import { RoomService } from "@/application/service/room";
import { Room } from "@/core/entities/models/Room";

@injectable()
export class RoomServiceImpl implements RoomService {
  constructor(private httpClient: HttpClient) {}

  async findAll(): Promise<Room[]> {
    return ROOM_VALUES;
  }
}
