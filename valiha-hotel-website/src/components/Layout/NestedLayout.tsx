import Image from "next/image";
import { ReactNode } from "react";

const NestedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image
          src="/assets/images/banner.webp"
          fill={true}
          alt="banner"
          sizes="100%"
          className="h-full w-full"
        />
      </div>
      {children}
    </>
  );
};

export default NestedLayout;
