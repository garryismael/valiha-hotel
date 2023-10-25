import { Breadcrumb } from "@/components/BreadCrumbs";
import { HouseIcon } from "@/icons/breadcrumb/house-icon";
import { FaDoorOpen } from "react-icons/fa6";

export const roomBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HouseIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <FaDoorOpen size={24} className="text-white-gray-500 ml-2" />,
    text: "Chambres",
    href: "/rooms",
    spacer: "/",
  },
  {
    id: 3,
    text: "List",
  },
];
