import { Provider } from "inversify-react";
import container from "./container";

const InversifyProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider container={container}>{children}</Provider>;
};

export default InversifyProvider;
