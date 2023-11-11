import { shuttleDestinations, shuttleState } from "@/constants/shuttle";

export const getShuttleState = (key: string) => {
  return shuttleState[key as keyof typeof shuttleState];
};

export const displayDestination = (destination: string) => {
  if (Object.keys(shuttleDestinations).includes(destination)) {
    return shuttleDestinations[destination as keyof typeof shuttleDestinations];
  }
  return destination;
};
