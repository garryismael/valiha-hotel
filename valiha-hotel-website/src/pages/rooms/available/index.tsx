import NestedLayout from "@/components/Layout/NestedLayout";
import AvailableRoomList from "@/components/Room/available-room-list";
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
      <AvailableRoomList rooms={rooms} />
    </section>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getServerSideProps(context: NextPageContext) {
  const { checkIn, checkOut } = context.query;
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
