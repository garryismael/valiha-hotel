import { Location } from "@/domain/entities/location";
import { getLocationPrice } from "@/lib/utils/location";

const LocationTotalAmount = ({ location }: { location: Location }) => {
  return (
    <h1>
      <span className="text-lg font-semibold">Total: </span>
      <span className="text-2xl font-bold">
        {getLocationPrice(location)} MGA
      </span>
    </h1>
  );
};

export default LocationTotalAmount;
