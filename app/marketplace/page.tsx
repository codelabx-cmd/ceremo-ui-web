import MarketplaceNavbar from "@/components/marketplace/MarketplaceNavbar";
import MarketplaceHero from "@/components/marketplace/MarketplaceHero";
import CategoryChips from "@/components/marketplace/CategoryChips";
import FilterSidebar from "@/components/marketplace/FilterSidebar";
import SortBar from "@/components/marketplace/SortBar";
import VendorGrid from "@/components/marketplace/VendorGrid";

export default function MarketplacePage() {
  return (
    <main className="bg-gray-50 min-h-screen">

      <MarketplaceNavbar />

      <MarketplaceHero />

      <CategoryChips />

      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-10
        "
      >

        <div
          className="
          grid
          grid-cols-12
          gap-8
          "
        >

          <div className="col-span-3">
            <FilterSidebar />
          </div>

          <div className="col-span-9">

            <SortBar />

            <VendorGrid />

          </div>

        </div>

      </div>

    </main>
  );
}