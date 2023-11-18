import CarPanel from "@/components/CarPanel";
import getCars from "@/libs/getCars";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { CarJson } from "interfaces";

export default async function Car() {
  const cars: CarJson = await getCars();
  return (
    <main className="text-center p-5">
      <h1 className="text-xl font-medium text-black">
        Select Your Travel Partner
      </h1>
      <Suspense
        fallback={
          <p className="text-black">
            Loading ... <LinearProgress />
          </p>
        }
      >
        <CarCatalog carJson={cars} />
      </Suspense>

      <hr className="my-10" />
      <h1 className="text-black text-xl font-medium">
        TRY Client-side Car Panel
      </h1>
      <CarPanel />
    </main>
  );
}
