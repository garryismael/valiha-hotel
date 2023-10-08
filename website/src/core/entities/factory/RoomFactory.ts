import { Room } from "@/core/entities/models/Room";
import { RoomFactory } from "@/core/interfaces/factory/RoomFactory";
import { Category } from "../models/Category";

export class RoomFactoryImpl implements RoomFactory {
  create(
    id: string,
    title: string,
    price: number,
    image: string,
    category: Category
  ): Room {
    return new Room(id, title, price, image, category);
  }
}
