import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaCalendarCheck } from "react-icons/fa6";

type ReservationType = {
  value: string;
  color: "warning" | "success" | "danger" | "default" | "primary" | "secondary";
};

export const reservationState: Record<string, ReservationType> = {
  pending: {
    value: "en attente",
    color: "danger",
  },
  confirmed: {
    value: "confirmée",
    color: "warning",
  },
  done: {
    value: "payé",
    color: "success",
  },
  canceled: {
    value: "annulée",
    color: "secondary",
  },
  no_show: {
    value: "échouée",
    color: "danger",
  },
};

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
  { name: "CLIENTS", uid: "client" },
  { name: "ÉTATS", uid: "state" },
  { name: "DATES", uid: "date" },
  { name: "PAIEMENTS", uid: "payment" },
  { name: "CHAMBRES", uid: "rooms" },
  { name: "PARKING", uid: "parking" },
  { name: "NAVETTES", uid: "shuttles"},
  { name: "PETIT-DÉJEUNERS", uid: "breakfasts"},
  { name: "ACTIONS", uid: "actions" },
];