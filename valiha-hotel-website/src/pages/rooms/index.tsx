import NestedLayout from "@/components/Layout/NestedLayout";
import RoomList from "@/components/Room/room-list";
import { NextPageContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { ReactElement } from "react";
import container from "@/infrastructure/config/container.config";
import { GetRoomsInteractor, GetRoomsUseCase } from "@/domain/use-cases/room";
import { Room } from "@/domain/entities/room";
import { useTranslation } from "next-i18next";

type Props = {
  rooms: Room[];
};

const Page = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto">
      <h1 className="title">{t("room.title")}</h1>
      <RoomList rooms={props.rooms} />
    </section>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export const getServerSideProps = async (props: NextPageContext) => {
  const translation = await serverSideTranslations(props.locale as string, [
    "common",
  ]);

  const findRooms = container.resolve<GetRoomsUseCase>(GetRoomsInteractor);

  const rooms = await findRooms.execute();
  return {
    props: {
      ...translation,
      rooms,
    },
  };
};

export default Page;
