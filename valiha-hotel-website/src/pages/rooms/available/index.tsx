import NestedLayout from "@/components/Layout/NestedLayout";
import AvailableRoomList from "@/components/Room/available-room-list";
import { Room } from "@/domain/entities/room";
import {
  GetAvailableRoomsInteractor,
  GetAvailableRoomsUseCase,
} from "@/domain/use-cases/room";
import { useAppDispatch } from "@/hooks/store";
import container from "@/infrastructure/config/container.config";
import { clearRooms } from "@/infrastructure/store/slices/booking-slice";
import { NextPageWithLayout } from "@/pages/_app";
import { NextPageContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

type Props = {
  rooms: Room[];
};

const Page: NextPageWithLayout<Props> = ({ rooms }) => {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  dispatch(clearRooms());
  return (
    <section className="container mx-auto">
      <h1 className="title">{t("room_disponible")}</h1>
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
  const translation = await serverSideTranslations(context.locale as string, [
    "common",
  ]);

  const rooms = await findAvailability.execute(
    checkIn as string,
    checkOut as string
  );
  return { props: { rooms, ...translation } };
}

export default Page;
