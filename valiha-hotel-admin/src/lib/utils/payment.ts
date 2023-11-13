import { paymentState } from "@/constants/payment";
import { paymentType } from "@/constants/transactions";

export const getPaymentState = (key: string) => {
  return paymentState[key as keyof typeof paymentState];
};

export const getPaymentType = (key: string) => {
  return paymentType[key as keyof typeof paymentType];
};
