import { ICategory } from "@/core/interfaces/models/Category";
import { IRoom } from "../models/Room";

export interface RoomFactory {
  create(
    id: string,
    title: string,
    price: number,
    image: string,
    category: ICategory
  ): IRoom;
}
