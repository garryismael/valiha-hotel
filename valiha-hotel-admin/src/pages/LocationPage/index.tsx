"use client";
import Breadcrumbs from "@/components/BreadCrumbs";
import LocationTable from "@/components/Location/location-table";
import { locationBreadcrumbs } from "@/constants/location";
import { Location } from "@/domain/entities/location";
import { useLocationList } from "@/hooks/useLocation";
import { DotsIcon } from "@/icons/accounts/dots-icon";
import { Input } from "@nextui-org/react";

type Props = {
  locations: Location[];
};
function LocationPage({ locations }: Props) {
  const data = useLocationList(locations);
  return (
    <main className="my-14 max-w-[100rem] mx-auto w-full flex flex-col gap-4">
      <Breadcrumbs breadcrumbs={locationBreadcrumbs} />
      <h3 className="title">Liste de Locations</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <Input
            classNames={{
              input: "w-full",
              mainWrapper: "w-full",
            }}
            placeholder="Recherche des locations"
          />
          <DotsIcon />
        </div>
      </div>
      <LocationTable locations={data} />
    </main>
  );
}

export default LocationPage;
