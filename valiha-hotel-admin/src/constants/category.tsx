import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaBed, FaKitchenSet } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";

export const categoryBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <FaBed size={24} className="text-white-gray-500 ml-2"/>,
    text: "Categories",
    href: "/categories",
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
