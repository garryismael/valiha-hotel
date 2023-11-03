type PaymentType = {
  value: string;
  color: "warning" | "success" | "danger" | "default" | "primary" | "secondary";
};
export const paymentState: Record<string, PaymentType> = {
  pending: {
    value: "en cours",
    color: "warning",
  },
  paid: {
    value: "payé",
    color: "success",
  },
  failed: {
    value: "échouée",
    color: "danger",
  },
};
