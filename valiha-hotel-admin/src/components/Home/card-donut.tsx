"use client";

import { Card, CardBody } from "@nextui-org/react";
import dynamic from "next/dynamic";

const Donut = dynamic(
  () => import("@/components/Chart/Donut").then((mod) => mod.Donut),
  {
    ssr: false,
  }
);

export const CardDonut = () => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-4 py-6 w-full h-[378px]">
      <CardBody className="py-5 gap-6">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold text-center">
              Nombre de réservations par catégorie de chambre
            </span>
          </div>
        </div>

        <div className="flex items-center gap-6 flex-col">
          <Donut/>
        </div>
      </CardBody>
    </Card>
  );
};
