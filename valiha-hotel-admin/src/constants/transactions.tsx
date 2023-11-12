import { Breadcrumb } from "@/components/BreadCrumbs";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaCalendarCheck, FaClockRotateLeft } from "react-icons/fa6";

type PaymentType = {
  value: string;
  color: "warning" | "success" | "danger" | "default" | "primary" | "secondary";
};

export const transactionState: Record<string, PaymentType> = {
  cash: {
    value: "en espèce",
    color: "danger",
  },
  m_vola: {
    value: "mVola",
    color: "warning",
  },
  orange_money: {
    value: "orange money",
    color: "success",
  },
  airtel_money: {
    value: "airtel money",
    color: "secondary",
  },
  credit_card: {
    value: "carte bancaire",
    color: "danger",
  },
};

export const transactionBreadcrumbs: Breadcrumb[] = [
  {
    id: 1,
    icon: <HomeIcon />,
    text: "Tableau de bord",
    href: "/",
    spacer: "/",
  },
  {
    id: 2,
    icon: <FaClockRotateLeft size={24} className="text-white-gray-500 ml-2" />,
    text: "Transactions",
    href: "/transactions",
    spacer: "/",
  },
  {
    id: 3,
    text: "Liste",
  },
];

export const transactionColumns = [
  { name: "TYPE PAIEMENT", uid: "client" },
  { name: "DATE", uid: "state" },
  { name: "ADMIN", uuid: "user" },
  { name: "MONTANT", uid: "date" },
  { name: "PAIEMENT", uid: "payment" },
  { name: "ACTIONS", uid: "actions" },
];
