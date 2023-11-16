import { Location } from "@/domain/entities/location";
import { getDays } from "@/lib/utils/date";
import { getLocationState } from "@/lib/utils/location";
import { getPaymentState, getPaymentType } from "@/lib/utils/payment";
import { Chip, User } from "@nextui-org/react";
import LocationTableAction from "./location-table-action";
import ReservationPaymentEdit from "../Reservation/reservation-edit-payment";

interface Props {
  location: Location;
  columnKey: string | React.Key;
}
export const LocationRenderCell = ({ location, columnKey }: Props) => {
  switch (columnKey) {
    case "client":
      return (
        <div className="inline-flex flex-col items-start">
          <span className="text-small">
            {location.client.firstName} {location.client.lastName}
          </span>
          <span className="text-tiny text-default-500">
            {location.client.email}
          </span>
          <span className="text-tiny text-default-500">
            {location.client.phoneNumber}
          </span>
        </div>
      );
    case "state":
      const locationState = getLocationState(location.state);
      return (
        <Chip color={locationState.color} size="sm" variant="flat">
          {locationState.value}
        </Chip>
      );
    case "date":
      return (
        <div className="inline-flex flex-col items-start min-w-[160px] w-[160px] max-w-[160px]">
          <span className="text-small text-inherit">
            {location.start}-{location.end}
          </span>
          <span className="text-tiny text-default-500">
            {getDays(location.start, location.end)} jours
          </span>
        </div>
      );
    case "payment":
      return <ReservationPaymentEdit payment={location.payment} />;
    case "cars":
      return (
        <div className="flex gap-2 flex-wrap">
          {location.cars.map((car) => (
            <Chip key={car.id} color="primary" variant="flat" size="sm">
              {car.mark}
            </Chip>
          ))}
        </div>
      );
    case "actions":
      return <LocationTableAction location={location} />;
    default:
      //@ts-ignore
      const cellValue = location[columnKey];
      return cellValue;
  }
};
