import { ReactNode } from "react";
import MenuHeader from "../MenuHeader";
import Footer from "../FooterSection";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MenuHeader />
      <main className="relative">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
