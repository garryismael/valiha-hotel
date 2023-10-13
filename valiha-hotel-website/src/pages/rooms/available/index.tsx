import NestedLayout from "@/components/Layout/NestedLayout";
import {
  GetAvailableRoomsInteractor,
  GetAvailableRoomsUseCase,
} from "@/domain/use-cases/room";
import { NextPageWithLayout } from "@/pages/_app";
import { NextPageContext } from "next";
import { ReactElement } from "react";
import { container } from "tsyringe";

const Page: NextPageWithLayout = () => {
  return (
    <section>
      <h1 className="title">Available Rooms</h1>
      <div></div>
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
