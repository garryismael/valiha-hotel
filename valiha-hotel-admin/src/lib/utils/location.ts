import { locationState } from "@/constants/location";
import { Location } from "@/domain/entities/location";

export const getLocationState = (key: string) => {
  return locationState[key as keyof typeof locationState];
};

export const getLocationPrice = (location: Location) => {
  const locationPrice = location.cars.reduce(
    (prev, curr) => curr.price + prev,
    0
  );

  const total = locationPrice;
  const discount = location.payment.discount;

  return discount > 0 ? total - (total * discount) / 100 : total;
};
