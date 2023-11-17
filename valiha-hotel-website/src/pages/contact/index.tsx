import InputErrorMessage from "@/components/ErrorMessage";
import NestedLayout from "@/components/Layout/NestedLayout";
import useContactForm from "@/hooks/contact";
import { isInvalid } from "@/utils/input";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { NextPageContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const Page = () => {
  const { t } = useTranslation();
  const {loading, formik} = useContactForm();
  return (
    <section className="container mx-auto">
      <h1 className="title my-4 text-center">Contactez-nous</h1>
      <div className="grid grid-cols-3 gap-4 h-[300px]">
        <div className="flex flex-col items-center justify-center shadow-lg p-4 w-full gap-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaLocationDot size={32} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold">{t("address")}</h1>
          <p>{t("address_value")}</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg p-4 w-full gap-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaEnvelope size={32} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold">{t("email")}</h1>
          <p>contact@valihahotel.com</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg p-4 w-full gap-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <FaPhone size={32} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold">{t("phone")}</h1>
          <p>+261 34 50 741 52</p>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="my-4">
        <h1 className="title text-2xl text-center">{t("questions")}</h1>
        <div className="flex flex-col p-8 shadow-lg justify-center flex-wrap gap-2 w-2/3 mx-auto">
          <div className="flex items-center justify-between gap-4">
            <Input
              size="lg"
              name="client.lastName"
              label={t("reservation.booking.last_name")}
              variant="bordered"
              className="w-full"
              radius="sm"
              onChange={formik.handleChange}
              isInvalid={isInvalid(formik, "client.lastName")}
              errorMessage={
                <InputErrorMessage name="client.lastName" formik={formik} />
              }
            />
            <Input
              size="lg"
              name="client.firstName"
              label={t("reservation.booking.first_name")}
              variant="bordered"
              className="w-full"
              radius="sm"
              onChange={formik.handleChange}
              isInvalid={isInvalid(formik, "client.firstName")}
              errorMessage={
                <InputErrorMessage name="client.firstName" formik={formik} />
              }
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <Input
              size="lg"
              name="client.phoneNumber"
              label={t("reservation.booking.phone_number")}
              variant="bordered"
              className="w-full"
              radius="sm"
              onChange={formik.handleChange}
              isInvalid={isInvalid(formik, "client.phoneNumber")}
              errorMessage={
                <InputErrorMessage name="client.phoneNumber" formik={formik} />
              }
            />
            <Input
              size="lg"
              name="client.email"
              label={t("reservation.booking.email")}
              variant="bordered"
              className="w-full"
              radius="sm"
              onChange={formik.handleChange}
              isInvalid={isInvalid(formik, "client.email")}
              errorMessage={
                <InputErrorMessage name="client.email" formik={formik} />
              }
            />
          </div>
          <Select
            name="subject"
            variant="bordered"
            label={t("subject")}
            classNames={{
              label: "z-1 text-medium",
            }}
            radius="sm"
            size="lg"
            onChange={formik.handleChange}
            isInvalid={isInvalid(formik, "subject")}
            errorMessage={<InputErrorMessage name="subject" formik={formik} />}
          >
            <SelectItem key="room-service" value="room-service">
              {t("service_room")}
            </SelectItem>
            <SelectItem key="responsable" value="responsable">
              {t("responsable")}
            </SelectItem>
            <SelectItem key="help-center" value="help-center">
              {t("help")}
            </SelectItem>
          </Select>
          <Textarea
            name="message"
            label={t("message")}
            variant="bordered"
            classNames={{
              label: "z-1 text-medium",
            }}
            radius="sm"
            size="lg"
            onChange={formik.handleChange}
            isInvalid={isInvalid(formik, "message")}
            errorMessage={<InputErrorMessage name="message" formik={formik} />}
          />
          <Button
            type="submit"
            className="bg-reddish-orange-500 w-fit text-white self-center"
            radius="sm"
            size="lg"
            isLoading={loading}
          >
            {t("send_now")}
          </Button>
        </div>
      </form>
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
