import NestedLayout from "@/components/Layout/NestedLayout";
import RoomList from "@/components/Room/room-list";
import { Room } from "@/domain/entities/room";
import {
  GetAvailableRoomsInteractor,
  GetAvailableRoomsUseCase,
} from "@/domain/use-cases/room";
import container from "@/infrastructure/config/container.config";
import { NextPageWithLayout } from "@/pages/_app";
import { NextPageContext } from "next";
import { ReactElement } from "react";

type Props = {
  rooms: Room[];
};

const Page: NextPageWithLayout<Props> = ({ rooms }) => {
  return (
    <section className="container mx-auto">
      <h1 className="title">Available Rooms</h1>
      <RoomList rooms={rooms} />
    </section>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getServerSideProps(context: NextPageContext) {
  const { checkIn, checkOut } = context.query;
  console.log(checkIn, checkOut);
  const findAvailability = container.resolve<GetAvailableRoomsUseCase>(
    GetAvailableRoomsInteractor
  );

  const rooms = await findAvailability.execute(
    checkIn as string,
    checkOut as string
  );
  return { props: { rooms } };
}

export default Page;
