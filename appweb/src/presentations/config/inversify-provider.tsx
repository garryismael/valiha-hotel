import { Provider } from "inversify-react";
import React from "react";
import container from "./container";

type Props = {
  children: React.ReactNode;
};

const InversifyProvider = (props: Props) => {
  return <Provider container={container}>{props.children}</Provider>;
};

export default InversifyProvider;
