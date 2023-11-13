import { locationState } from "@/constants/location";
import { Location } from "@/domain/entities/location";

export const getLocationState = (key: string) => {
    return locationState[key as keyof typeof locationState];
  };

  export const getLocationPrice = (location: Location) => {
    return 0;
  };
