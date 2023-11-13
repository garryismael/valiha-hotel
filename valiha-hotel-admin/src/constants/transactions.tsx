import { Breadcrumb } from "@/components/BreadCrumbs";
import { Transaction } from "@/domain/entities/transaction";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaClockRotateLeft } from "react-icons/fa6";

type PaymentType = {
  value: string;
  color: "warning" | "success" | "danger" | "default" | "primary" | "secondary";
};

export const paymentType: Record<string, PaymentType> = {
  cash: {
    value: "en espèce",
    color: "secondary",
  },
  m_vola: {
    value: "m-vola",
    color: "success",
  },
  orange_money: {
    value: "orange money",
    color: "warning",
  },
  airtel_money: {
    value: "airtel money",
    color: "danger",
  },
  credit_card: {
    value: "carte bancaire",
    color: "primary",
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
  { name: "ADMIN", uid: "user" },
  { name: "DATE", uid: "date" },
  { name: "TYPE PAIEMENT", uid: "paymentType" },
  { name: "ÉTAT PAIEMENT", uid: "paymentState" },
  { name: "REMISE", uid: "discount" },
  { name: "MONTANT", uid: "amount" },
];

export const transactionData: Transaction[] = [
  {
    id: "617ca23a94ae4e3c5625b7cc",
    amount: 150000,
    date: "13/11/2023 08:00",
    paymentType: "cash",
    payment: {
      id: "617ca23a94ae4e3c5625b7d3",
      discount: 10,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7e3",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@gmail.com",
      image: "/profile/john.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7cd",
    amount: 180000,
    date: "14/11/2023 06:00",
    paymentType: "credit_card",
    payment: {
      id: "617ca23a94ae4e3c5625b7d4",
      discount: 5,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7e4",
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      email: "jane.smith@yahoo.com",
      image: "/profile/erica.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7ce",
    amount: 160000,
    date: "15/11/2023 18:00",
    paymentType: "m_vola",
    payment: {
      id: "617ca23a94ae4e3c5625b7d5",
      discount: 8,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7e5",
      firstName: "Alice",
      lastName: "Johnson",
      phoneNumber: "555-123-4567",
      email: "alice.johnson@outlook.com",
      image: "/profile/emilie.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7cf",
    amount: 210000,
    date: "16/11/2023 19:34",
    paymentType: "orange_money",
    payment: {
      id: "617ca23a94ae4e3c5625b7d6",
      discount: 12,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7e6",
      firstName: "Bob",
      lastName: "Miller",
      phoneNumber: "444-789-0123",
      email: "bob.miller@gmail.com",
      image: "/profile/lennon.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7d0",
    amount: 160000,
    date: "17/11/2023 14:02",
    paymentType: "airtel_money",
    payment: {
      id: "617ca23a94ae4e3c5625b7d7",
      discount: 15,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7e7",
      firstName: "Eva",
      lastName: "Anderson",
      phoneNumber: "777-555-1234",
      email: "eva.anderson@yahoo.com",
      image: "/profile/tatiana.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7d1",
    amount: 180000,
    date: "18/11/2023 15:16",
    paymentType: "credit_card",
    payment: {
      id: "617ca23a94ae4e3c5625b7d8",
      discount: 8,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7e8",
      firstName: "Michael",
      lastName: "Brown",
      phoneNumber: "222-333-4444",
      email: "michael.brown@outlook.com",
      image: "/profile/travolta.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7d2",
    amount: 210000,
    date: "19/11/2023 18:35",
    paymentType: "m_vola",
    payment: {
      id: "617ca23a94ae4e3c5625b7d9",
      discount: 10,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7e9",
      firstName: "Sophia",
      lastName: "Davis",
      phoneNumber: "999-888-7777",
      email: "sophia.davis@gmail.com",
      image: "/profile/john.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7d3",
    amount: 150000,
    date: "20/11/2023 19:42",
    paymentType: "cash",
    payment: {
      id: "617ca23a94ae4e3c5625b7da",
      discount: 5,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7ea",
      firstName: "Oliver",
      lastName: "Garcia",
      phoneNumber: "111-222-3333",
      email: "oliver.garcia@yahoo.com",
      image: "/profile/travolta.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7d4",
    amount: 190000,
    date: "21/11/2023 20:41",
    paymentType: "orange_money",
    payment: {
      id: "617ca23a94ae4e3c5625b7db",
      discount: 12,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7eb",
      firstName: "Isabella",
      lastName: "Lopez",
      phoneNumber: "666-555-4444",
      email: "isabella.lopez@outlook.com",
      image: "/profile/erica.jpg",
    },
  },
  {
    id: "617ca23a94ae4e3c5625b7d5",
    amount: 200000,
    date: "22/11/2023 22:28",
    paymentType: "airtel_money",
    payment: {
      id: "617ca23a94ae4e3c5625b7dc",
      discount: 15,
      state: "paid",
    },
    user: {
      id: "617ca23a94ae4e3c5625b7ec",
      firstName: "Daniel",
      lastName: "Perez",
      phoneNumber: "333-444-5555",
      email: "daniel.perez@gmail.com",
      image: "/profile/emilie.jpg",
    },
  },
];
