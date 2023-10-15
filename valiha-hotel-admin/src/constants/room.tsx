import { Breadcrumb } from "@/components/BreadCrumbs";
import { HouseIcon } from "@/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/icons/breadcrumb/users-icon";

export const roomBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HouseIcon />,
    text: "Home",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <UsersIcon />,
    text: "Rooms",
    href: "/rooms",
    spacer: "/",
  },
  {
    id: 3,
    text: "List",
  },
];
