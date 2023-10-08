import { Category } from "../models/Category";

const CATEGORY_VALUES = [
  new Category(
    "1",
    "Standard",
    "Hotel with breakfast",
    2,
    1,
    1,
    0,
    "/statics/categories/standard.webp"
  ),
  new Category(
    "3",
    "Deluxe Double",
    "Hotel with breakfast",
    2,
    1,
    1,
    0,
    "/statics/categories/deluxeDouble.webp"
  ),
  new Category(
    "5",
    "Family Room",
    "Hotel with breakfast",
    2,
    2,
    1,
    2,
    "/statics/categories/familyRoom.webp"
  ),
  new Category(
    "2",
    "Deluxe Twin",
    "Hotel with breakfast",
    2,
    1,
    0,
    2,
    "/statics/categories/deluxeTwin.webp"
  ),
  new Category(
    "4",
    "Chambre Triple",
    "Hotel with breakfast",
    3,
    1,
    1,
    1,
    "/statics/categories/triple.webp"
  ),
  new Category(
    "6",
    "Appartement",
    "Apartment with Kitchen",
    2,
    1,
    1,
    1,
    "/statics/categories/appart.webp"
  ),
];

export default CATEGORY_VALUES;
