import { ReactNode } from "react";
import MenuHeader from "../MenuHeader";
import Footer from "../Footer";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MenuHeader />
      <main className="h-screen">{children}</main>
      <div className="h-screen"></div>
      <Footer />
    </>
  );
};

export default BaseLayout;
