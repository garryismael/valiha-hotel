import { Breadcrumb } from "@/components/BreadCrumbs";
import { HouseIcon } from "@/icons/breadcrumb/house-icon";
import { UsersIcon } from "@/icons/breadcrumb/users-icon";
import { FaKitchenSet } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";

export const categoryBreadcrumbs: Breadcrumb[] = [
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

export const categoryTypes = {
  "hotel-with-breakfast": {
    text: "Hotel With Breakfast",
    icon: <MdRestaurantMenu size={24}/>,
  },
  "apartment-with-kitchen": {
    text: "Apartment with Kitchen",
    icon: <FaKitchenSet size={24}/>,
  },
};
