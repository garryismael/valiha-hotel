import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { RiShieldUserFill } from "react-icons/ri";

export const accountBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <RiShieldUserFill size={24} className="text-white-gray-500 ml-2"/>,
    text: "Administrateurs",
    href: "/accounts",
    spacer: "/",
  },
  {
    id: 3,
    text: "Liste",
  },
];
