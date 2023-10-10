import MenuHeader from "app/components/MenuHeader";
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div>
      <MenuHeader />
      <Outlet />
    </div>
  );
};
