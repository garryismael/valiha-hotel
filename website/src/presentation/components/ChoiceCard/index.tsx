import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  title: string;
  paragraph: string;
};

const ChoiceCard = ({ Icon, title, paragraph }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl w-1/4 py-8 px-2 hover:shadow-md flex-grow-0 flex-shrink-0 basis-auto">
      <Icon className="container mx-auto my-5 text-reddish-orange-500" size={48} />
      <div className="mt-8 text-center flex-auto">
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-base">{paragraph}</p>
      </div>
    </div>
  );
};

export default ChoiceCard;
