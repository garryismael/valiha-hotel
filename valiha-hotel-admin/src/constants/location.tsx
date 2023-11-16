import { Breadcrumb } from "@/components/BreadCrumbs";
import { Location } from "@/domain/entities/location";
import { HomeIcon } from "@/icons/sidebar/home-icon";
import { FaCalendarCheck } from "react-icons/fa6";

type LocationType = {
  value: string;
  color: "warning" | "success" | "danger" | "default" | "primary" | "secondary";
};

export const locationState: Record<string, LocationType> = {
  pending: {
    value: "en attente",
    color: "danger",
  },
  confirmed: {
    value: "confirmée",
    color: "warning",
  },
  in_progress: {
    value: "en cours",
    color: "default"
  },
  done: {
    value: "terminée",
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

export const locationBreadcrumbs: Breadcrumb[] = [
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
    text: "Locations",
    href: "/locations",
    spacer: "/",
  },
  {
    id: 3,
    text: "Liste",
  },
];

export const locationDetailBreadcrumbs: Breadcrumb[] = [
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
    text: "Locations",
    href: "/locations",
    spacer: "/",
  },
  {
    id: 3,
    text: "Detail",
  },
];

export const locationColumns = [
  { name: "CLIENT", uid: "client" },
  { name: "ÉTAT", uid: "state" },
  { name: "DATES", uid: "date" },
  { name: "PAIEMENT", uid: "payment" },
  { name: "VOITURES", uid: "cars" },
  { name: "ACTIONS", uid: "actions" },
];

export const locationsData: Location[] = [
  {
    id: "f2cc1c5a-9e1a-4dbb-9ef3-9a0a13a60e93",
    state: "pending",
    start: "13/11/2023",
    end: "15/11/2023",
    destination: "Antananarivo",
    reason: "Business Trip",
    client: {
      id: "c1",
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "123-456-7890",
      email: "john.doe@gmail.com",
    },
    cars: [
      {
        id: "652b9c2c44296476bf93be98",
        mark: "Toyota LAND CRUISER",
        training: 4,
        mileage: 12,
        door: 4,
        place: 5,
        year: 2005,
        image:
          "http://localhost:5000/LOCATIONS-SERVICE/uploads/cars/upload-8046745767506189883-LandCruiser.webp",
        price: 200000,
      },
    ],
    payment: {
      id: "p1",
      discount: 10,
      state: "pending",
    },
  },
  {
    id: "2a2934bd-64f0-4c5d-8b20-0c3b527f4f6d",
    state: "pending",
    start: "14/11/2023",
    end: "16/11/2023",
    destination: "Hors Antananarivo",
    reason: "Vacation",
    client: {
      id: "c2",
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "987-654-3210",
      email: "jane.smith@outlook.com",
    },
    cars: [
      {
        id: "652b9c9f44296476bf93be99",
        mark: "Nissan PATHFINDER",
        training: 4,
        mileage: 12,
        door: 5,
        place: 5,
        year: 2005,
        image:
          "http://localhost:5000/LOCATIONS-SERVICE/uploads/cars/upload-8296962380770249355-Nissan.webp",
        price: 200000,
      },
    ],
    payment: {
      id: "p2",
      discount: 5,
      state: "paid",
    },
  },
  {
    id: "d68e1c2a-9a7e-4e7f-8c33-45b1e4e74a36",
    state: "confirmed",
    start: "15/11/2023",
    end: "17/11/2023",
    destination: "Antananarivo",
    reason: "Conference",
    client: {
      id: "c3",
      firstName: "Alice",
      lastName: "Johnson",
      phoneNumber: "555-123-4567",
      email: "alice.johnson@yahoo.com",
    },
    cars: [
      {
        id: "6550c092ad3b370f39a37dab",
        mark: "Toyota Land Cruiser (V8)",
        training: 4,
        mileage: 12,
        door: 5,
        place: 5,
        year: 2020,
        image:
          "http://localhost:5000/LOCATIONS-SERVICE/uploads/cars/upload-4767593982004646481-alex-azabache-XT3Kk0GelbE-unsplash.jpg",
        price: 300000,
      },
    ],
    payment: {
      id: "p3",
      discount: 8,
      state: "paid",
    },
  },
  {
    id: "b0f97d48-871d-40b3-8b93-2145c3fcd317",
    state: "confirmed",
    start: "16/11/2023",
    end: "18/11/2023",
    destination: "Hors Antananarivo",
    reason: "Vacation",
    client: {
      id: "c4",
      firstName: "Bob",
      lastName: "Miller",
      phoneNumber: "444-789-0123",
      email: "bob.miller@gmail.com",
    },
    cars: [
      {
        id: "6550c100ad3b370f39a37dac",
        mark: "Toyota Land Cruiser (V8)",
        training: 4,
        mileage: 12,
        door: 5,
        place: 5,
        year: 2020,
        image:
          "http://localhost:5000/LOCATIONS-SERVICE/uploads/cars/upload-2043130608750628572-toyota-v8.jpg",
        price: 300000,
      },
    ],
    payment: {
      id: "p4",
      discount: 12,
      state: "pending",
    },
  },
  {
    id: "078b0737-c69d-48ea-96f2-297e3b5d0207",
    state: "confirmed",
    start: "17/11/2023",
    end: "19/11/2023",
    destination: "Antananarivo",
    reason: "Sightseeing",
    client: {
      id: "c5",
      firstName: "Eva",
      lastName: "Anderson",
      phoneNumber: "777-555-1234",
      email: "eva.anderson@gmail.com",
    },
    cars: [
      {
        id: "6550c296ad3b370f39a37daf",
        mark: "Split-windshield VW Camper",
        training: 4,
        mileage: 10,
        door: 3,
        place: 3,
        year: 2010,
        image:
          "http://localhost:5000/LOCATIONS-SERVICE/uploads/cars/upload-14553543795849747703-oskars-sylwan-uLybsLAtStw-unsplash.jpg",
        price: 200000,
      },
    ],
    payment: {
      id: "p5",
      discount: 15,
      state: "paid",
    },
  },
  {
    id: "aa6daa3c-5a8d-4b2f-bf2d-29da75e8d7a3",
    state: "confirmed",
    start: "22/11/2023",
    end: "24/11/2023",
    destination: "Antananarivo",
    reason: "Road Trip",
    client: {
      id: "c10",
      firstName: "Daniel",
      lastName: "Perez",
      phoneNumber: "333-444-5555",
      email: "daniel.perez@gmail.com",
    },
    cars: [
      {
        id: "6550c092ad3b370f39a37dab",
        mark: "Toyota Land Cruiser (V8)",
        training: 4,
        mileage: 12,
        door: 5,
        place: 5,
        year: 2020,
        image:
          "http://localhost:5000/LOCATIONS-SERVICE/uploads/cars/upload-4767593982004646481-alex-azabache-XT3Kk0GelbE-unsplash.jpg",
        price: 300000,
      },
      {
        id: "6550c100ad3b370f39a37dac",
        mark: "Toyota Land Cruiser (V8)",
        training: 4,
        mileage: 12,
        door: 5,
        place: 5,
        year: 2020,
        image:
          "http://localhost:5000/LOCATIONS-SERVICE/uploads/cars/upload-2043130608750628572-toyota-v8.jpg",
        price: 300000,
      },
    ],
    payment: {
      id: "p10",
      discount: 15,
      state: "pending",
    },
  },
];
