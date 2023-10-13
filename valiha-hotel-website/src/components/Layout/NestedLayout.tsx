import Image from "next/image";
import { ReactNode } from "react";

const NestedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="relative w-full h-[500]">
        <Image
          src="/assets/images/banner.webp"
          alt="banner"
          sizes="100%"
          className="h-full w-full"
        />
      </div>
      {children}
    </div>
  );
};

export default NestedLayout;
