import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaCar } from "react-icons/fa6";

export const carBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <FaCar size={24} className="text-white-gray-500 ml-2" />,
    text: "Voitures",
    href: "/cars",
    spacer: "/",
  },
  {
    id: 3,
    text: "List",
  },
];
