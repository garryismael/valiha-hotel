import { CategoryResponseDto } from "@/application/dto/category/category-response";
import { Category } from "../models/Category";

const CATEGORY_VALUES: CategoryResponseDto[] = [
  {
    id: "1",
    title: "Standard",
    type: "Hotel with breakfast",
    adult: 2,
    kid: 1,
    bigBed: 0,
    smallBed: 1,
    image: "/statics/categories/standard.webp"
  },
  {
    id: "3",
    title: "Deluxe Double",
    type: "Hotel with breakfast",
    adult: 2,
    kid: 1,
    bigBed: 1,
    smallBed: 0,
    image: "/statics/categories/deluxeDouble.webp"
  },
  {
    id: "5",
    title: "Family Room",
    type: "Hotel with breakfast",
    adult: 2,
    kid: 2,
    bigBed: 1,
    smallBed: 2,
    image: "/statics/categories/familyRoom.webp"
  },
  {
    id: "2",
    title: "Deluxe Twin",
    type: "Hotel with breakfast",
    adult: 2,
    kid: 1,
    bigBed: 0,
    smallBed: 2,
    image: "/statics/categories/deluxeTwin.webp"
  },
  {
    id: "4",
    title: "Chambre Triple",
    type: "Hotel with breakfast",
    adult: 3,
    kid: 1,
    bigBed: 1,
    smallBed: 1,
    image: "/statics/categories/triple.webp"
  },
  {
    id: "6",
    title: "Appartement",
    type: "Apartment with Kitchen",
    adult: 2,
    kid: 1,
    bigBed: 1,
    smallBed: 1,
    image: "/statics/categories/appart.webp"
  }
];

export default CATEGORY_VALUES;
