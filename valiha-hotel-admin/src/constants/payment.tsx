import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaCreditCard } from "react-icons/fa6";

type PaymentType = {
  value: string;
  color: "warning" | "success" | "danger" | "default" | "primary" | "secondary";
};

export const paymentState: Record<string, PaymentType> = {
  pending: {
    value: "en attente",
    color: "warning",
  },
  paid: {
    value: "payée",
    color: "success",
  },
  failed: {
    value: "échouée",
    color: "danger",
  },
};

export const paymentColumns = [
  { name: "ÉTAT", uid: "state" },
  { name: "REMISE", uid: "discount" },
  { name: "ACTIONS", uid: "actions" },
];

export const paymentBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <FaCreditCard size={24} className="text-white-gray-500 ml-2" />,
    text: "Paiements",
    href: "/payments",
    spacer: "/",
  },
  {
    id: 3,
    text: "List",
  },
];
