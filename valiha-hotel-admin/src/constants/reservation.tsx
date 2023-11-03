import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaCalendarCheck } from "react-icons/fa6";

export const reservationBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <FaCalendarCheck size={24} className="text-white-gray-500 ml-2" />,
    text: "Reservations",
    href: "/reservations",
    spacer: "/",
  },
  {
    id: 3,
    text: "List",
  },
];

export const reservationColumns = [
  { name: "CLIENT", uid: "client" },
  { name: "PAIEMENT", uid: "payment" },
  { name: "DATES", uid: "date" },
  { name: "ACTIONS", uid: "actions" },
];
