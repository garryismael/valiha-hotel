type ShuttleType = {
  value: string;
  color: "warning" | "success" | "danger" | "default" | "primary" | "secondary";
};

export const shuttleState: Record<string, ShuttleType> = {
  pending: {
    value: "en attente",
    color: "danger",
  },
  progress: {
    value: "en cours",
    color: "primary",
  },
  completed: {
    value: "terminée",
    color: "success",
  },
  canceled: {
    value: "annulée",
    color: "secondary",
  },
  failed: {
    value: "échouée",
    color: "danger",
  },
};

export const shuttleColumns = [
  { name: "NOM DU VOL", uid: "flightName" },
  { name: "NUMERO DU VOL", uid: "flightNumber" },
  { name: "DESTINATION", uid: "destination" },
  { name: "DATE", uid: "date" },
  { name: "ÉTAT", uid: "state" },
  { name: "ACTIONS", uid: "actions"}
];
