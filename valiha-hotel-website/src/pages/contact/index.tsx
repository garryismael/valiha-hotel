import NestedLayout from "@/components/Layout/NestedLayout";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { NextPageContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Page = () => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto">
      <h1 className="title my-4 text-center">Contactez-nous</h1>
      <div className="grid grid-cols-3 gap-4 h-[300px]">
        <div className="flex flex-col items-center justify-center shadow-lg p-4 w-full gap-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaLocationDot size={32} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold">Adresse</h1>
          <p>Immeuble Valiha Antanimena, IVG 204 Antananarivo</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg p-4 w-full gap-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaEnvelope size={32} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold">Email</h1>
          <p>contact@valihahotel.com</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg p-4 w-full gap-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaPhone size={32} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold">Téléphone</h1>
          <p>+261 34 50 741 52</p>
        </div>
      </div>
      <div className="my-4">
        <h1 className="title text-2xl text-center">Avez-vous des questions?</h1>
        <div className="flex flex-col p-8 shadow-lg justify-center flex-wrap gap-2 w-2/3 mx-auto">
          <div className="flex items-center justify-between gap-4">
            <Input
              name="client.firstName"
              label={t("reservation.booking.first_name")}
              variant="bordered"
              className="w-full"
              radius="sm"
            />
            <Input
              name="client.lastName"
              label={t("reservation.booking.last_name")}
              variant="bordered"
              className="w-full"
              radius="sm"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Input
              name="client.phoneNumber"
              label={t("reservation.booking.phone_number")}
              variant="bordered"
              className="w-full"
              radius="sm"
            />
            <Input
              name="client.email"
              label={t("reservation.booking.email")}
              variant="bordered"
              className="w-full"
              radius="sm"
            />
          </div>
          <Select
            name="subject"
            variant="bordered"
            label="Sujet"
            classNames={{
              label: "z-1",
            }}
            radius="sm"
          >
            <SelectItem key="room-service" value="room-service">
              Service de chambre
            </SelectItem>
            <SelectItem key="responsable" value="responsable">
              Responsable
            </SelectItem>
            <SelectItem key="help-center" value="help-center">
              Centre d'aide
            </SelectItem>
          </Select>
          <Textarea
            name="message"
            label="Votre message"
            variant="bordered"
            classNames={{
              label: "z-1",
            }}
            radius="sm"
          />
          <Button
            type="submit"
            className="bg-reddish-orange-500 w-fit text-white self-center px-16"
            radius="sm"
            size="lg"
          >
            Envoyer maintenant
          </Button>
        </div>
      </div>
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
  return {
    props: {
      ...translation,
    },
  };
};

export default Page;
