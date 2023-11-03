import { paymentState } from "@/constants/payment";

export const getPaymentState = (key: string) => {
  return paymentState[key as keyof typeof paymentState];
};
