import { vendors } from "./MarketplaceData";
import VendorCard from "./VendorCard";

export default function VendorGrid() {
  return (
    <div
      className="
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-6
      mt-6
      "
    >
      <VendorCard vendor={vendors[0]} />
      <VendorCard vendor={vendors[1]} />
      <VendorCard vendor={vendors[2]} />
      <VendorCard vendor={vendors[3]} />
      <VendorCard vendor={vendors[4]} />
      <VendorCard vendor={vendors[5]} />
    </div>
  );
}