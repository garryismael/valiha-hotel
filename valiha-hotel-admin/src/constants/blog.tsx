import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaNewspaper } from "react-icons/fa6";

export const blogBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <FaNewspaper size={24} className="text-white-gray-500 ml-2" />,
    text: "Blogs",
    href: "/blogs",
    spacer: "/",
  },
  {
    id: 3,
    text: "Liste",
  },
];
