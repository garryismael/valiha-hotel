import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaUsers } from "react-icons/fa6";

export const clientBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <FaUsers size={24} className="text-white-gray-500 ml-2" />,
    text: "Clients",
    href: "/clients",
    spacer: "/",
  },
  {
    id: 3,
    text: "Liste",
  },
];

export const clientColumns = [
  { name: "NOM", uid: "lastName" },
  { name: "PRÉNOM", uid: "firstName" },
  { name: "EMAIL", uid: "email" },
  { name: "TELEPHONE", uid: "phoneNumber" },
  { name: "ACTIONS", uid: "actions" },
];
