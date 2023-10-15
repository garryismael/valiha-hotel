import RoomSection from "@/components/Room/RoomSection";
import { GetRoomsInteractor, GetRoomsUseCase } from "@/domain/use-cases/room";
import container from "@/infrastructures/config/container.config";

const Page = async () => {
  const getRooms = container.resolve<GetRoomsUseCase>(GetRoomsInteractor);
  const rooms = await getRooms.execute();
  return <RoomSection rooms={rooms} />;
};

export default Page;
