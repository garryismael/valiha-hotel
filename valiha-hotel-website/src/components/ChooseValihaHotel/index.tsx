import { choices } from "@/constants/choice";
import { useTranslation } from "next-i18next";

const ChooseValihaHotel = () => {
  const {t} = useTranslation();
  return (
    <section className="container mx-auto">
      <h1 className="title">{t("choice.title")}</h1>
      <div className="flex items-center flex-wrap justify-between content-between gap-4">
        {choices.map(({ id, Icon, title, paragraph }) => (
          <div
            key={id}
            className="basis-1/4 flex flex-col items-center justify-center rounded-3xl w-1/4 py-8 px-2 hover:shadow-md flex-grow-0 flex-shrink-0"
          >
            <Icon
              className="container mx-auto my-5 text-reddish-orange-500"
              size={48}
            />
            <div className="mt-8 text-center flex-auto">
              <h1 className="text-lg font-bold">{t(title)}</h1>
              <p className="text-base">{t(paragraph)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseValihaHotel;
