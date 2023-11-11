import { breakfastState } from "@/constants/breakfast";

export const getBreakfastState = (key: string) => {
  return breakfastState[key as keyof typeof breakfastState];
};
