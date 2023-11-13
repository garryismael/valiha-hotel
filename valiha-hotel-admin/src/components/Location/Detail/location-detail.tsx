"use client";

import { Location } from "@/domain/entities/location";
import LocationTableDetail from "./location-table";

type Props = {
  location: Location;
};

const LocationDetail = ({ location }: Props) => {
  return (
    <>
      <LocationTableDetail location={location} />
    </>
  );
};

export default LocationDetail;
