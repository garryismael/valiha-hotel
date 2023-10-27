import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useStickyHeader = (): [string, Dispatch<SetStateAction<string>>] => {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const cls = scrollTop >= 20 ? "active" : "";
    setSticky(cls);
  };

  return [sticky, setSticky];
};

export default useStickyHeader;
