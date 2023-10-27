import { FindAllRoomsInteractor } from "@/application/interactors/room/find-all";
import { FindAllRoomsUseCase } from "@/application/use-cases/room/get-rooms-use-case";
import RoomList from "@/presentation/components/Room/RoomList";
import React from "react";
import { container } from "tsyringe";

const Page = async () => {
  const findAllUseCase = container.resolve<FindAllRoomsUseCase>(
    FindAllRoomsInteractor
  );
  const rooms = await findAllUseCase.execute();
  return (
    <section className="container mx-auto pb-16">
      <h1 className="title text-center">Hébergement</h1>
      <div className="flex items-center justify-center content-between gap-10 flex-wrap">
        <RoomList rooms={rooms}/>
      </div>
    </section>
  );
};

export default Page;
