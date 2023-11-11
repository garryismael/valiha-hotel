type BreakfastType = {
  value: string;
  color: "warning" | "success" | "danger" | "default" | "primary" | "secondary";
};

export const breakfastState: Record<string, BreakfastType> = {
  pending: {
    value: "en attente",
    color: "danger",
  },
  completed: {
    value: "Terminé",
    color: "success",
  },
  canceled: {
    value: "annulée",
    color: "secondary",
  },
};

export const breakfastColumns = [
  { name: "DATE", uid: "date" },
  { name: "ÉTATS", uid: "state" },
  { name: "ACTIONS", uid: "actions"}
];
