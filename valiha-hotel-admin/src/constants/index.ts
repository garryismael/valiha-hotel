import { BiGridAlt, BiCollection, BiBed, BiCar } from "react-icons/bi";
import { MdCarRental } from 'react-icons/md';


export const sidebarLinks = [
  {
    id: 1,
    href: "/dashboard",
    icon:  BiGridAlt,
    name: "Dashboard",
    inner: false,
  },
  {
    id: 2,
    href: "/categories",
    icon: BiCollection,
    name: "Categories",
    inner: true
  },
  {
    id: 3,
    href: "/rooms",
    icon: BiBed,
    name: "Rooms",
    inner: true
  },
  {
    id: 4,
    href: '/reservations',
    icon: BiBed,
    name: "Reservations",
    inner: false
  },
  {
    id: 4,
    href: "/cars",
    icon: BiCar,
    name: "Cars",
    inner: true
  },
  {
    id: 5,
    href: "/locations",
    icon: MdCarRental,
    name: "Locations",
    inner: true
  },
];
