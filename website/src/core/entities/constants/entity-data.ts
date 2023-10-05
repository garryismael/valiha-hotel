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
    "/statics/2Standard/1.webp"
  ),
  new Category(
    "2",
    "Deluxe Twin",
    "Hotel with breakfast",
    2,
    1,
    0,
    2,
    "/statics/303Deluxe/1.webp"
  ),
  new Category(
    "3",
    "Deluxe Double",
    "Hotel with breakfast",
    2,
    1,
    1,
    0,
    "/statics/305Deluxe/1.webp"
  ),
  new Category(
    "4",
    "Triple",
    "Hotel with breakfast",
    3,
    1,
    1,
    1,
    "/statics/303Triple/1.webp"
  ),
  new Category(
    "5",
    "Family Room",
    "Hotel with breakfast",
    2,
    2,
    1,
    2,
    "/statics/305Familiale/1.webp"
  ),
  new Category(
    "6",
    "Apartment",
    "Apartment with Kitchen",
    2,
    1,
    1,
    1,
    "/statics/3Appart/1.webp"
  ),
];

export default CATEGORY_VALUES;
