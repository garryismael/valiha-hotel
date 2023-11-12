import "reflect-metadata";

import { container } from "tsyringe";
import { BlogServiceImpl } from "../services/blog";
import { BreakfastServiceImpl } from "../services/breakfast";
import { CarServiceImpl } from "../services/car";
import { CategoryServiceImpl } from "../services/category";
import { ClientServiceImpl } from "../services/client";
import { ReservationServiceImpl } from "../services/reservation";
import { RoomServiceImpl } from "../services/room";
import { ShuttleServiceImpl } from "../services/shuttle";
import { TransactionServiceImpl } from "../services/transaction";
import { UserServiceImpl } from "../services/user";
import { PaymentServiceImpl } from "../services/payment";

container.register("CategoryService", {
  useClass: CategoryServiceImpl,
});

container.register("RoomService", {
  useClass: RoomServiceImpl,
});

container.register("CarService", {
  useClass: CarServiceImpl,
});

container.register("UserService", {
  useClass: UserServiceImpl,
});

container.register("ReservationService", {
  useClass: ReservationServiceImpl,
});

container.register("ClientService", {
  useClass: ClientServiceImpl,
});

container.register("BlogService", {
  useClass: BlogServiceImpl,
});

container.register("ShuttleService", {
  useClass: ShuttleServiceImpl,
});

container.register("BreakfastService", {
  useClass: BreakfastServiceImpl,
});

container.register("TransactionService", {
  useClass: TransactionServiceImpl,
});

container.register("PaymentService", {
  useClass: PaymentServiceImpl,
});

export default container;
