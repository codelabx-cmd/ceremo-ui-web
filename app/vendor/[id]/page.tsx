import VendorGallery from "@/components/vendor/VendorGallery";
import VendorInfo from "@/components/vendor/VendorInfo";
import BookingCard from "@/components/vendor/BookingCard";
import Amenities from "@/components/vendor/Amenities";
import Reviews from "@/components/vendor/Reviews";
import LocationMap from "@/components/vendor/LocationMap";
import MarketplaceNavbar from "@/components/marketplace/MarketplaceNavbar";

export default function VendorDetailsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <MarketplaceNavbar />
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Header */}

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-5xl font-bold">
              Royal Palace Hall
            </h1>

            <div className="flex gap-4 mt-4">
              <span className="text-purple-600 font-semibold">
                ⭐ 4.9 (128 Reviews)
              </span>

              <span className="text-gray-600">
                📍 Bangalore, Karnataka
              </span>
            </div>

            <div className="flex gap-3 mt-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                Banquet Hall
              </span>

              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                500-1000 Guests
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                ✓ Verified Vendor
              </span>
            </div>
          </div>

          <div className="flex gap-6 text-lg">
            <button>🤍 Save</button>
            <button>🔗 Share</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            <VendorGallery />

            <VendorInfo />

            <Amenities />

            <div className="grid md:grid-cols-2 gap-6">
              <LocationMap />
              <Reviews />
            </div>

          </div>

          <div>
            <BookingCard />
          </div>

        </div>

      </div>
    </div>
  );
}