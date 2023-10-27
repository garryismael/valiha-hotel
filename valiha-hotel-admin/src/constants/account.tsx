import { Breadcrumb } from "@/components/BreadCrumbs";
import { HouseIcon } from "@/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/icons/breadcrumb/users-icon";

export const accountBreadcrumbs: Breadcrumb[] = [
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
    text: "Users",
    href: "/accounts",
    spacer: "/",
  },
  {
    id: 3,
    text: "List",
  },
];
