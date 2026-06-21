import {
  Calendar,
  Users,
  Clock,
  MapPin,
} from "lucide-react";
import MarketplaceNavbar from "../marketplace/MarketplaceNavbar";

export default function BookingSummaryCard() {
  return (
    <div className="bg-white rounded-3xl p-8 border shadow-sm">
      <div className="grid grid-cols-12 gap-8">

        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
          alt=""
          className="col-span-3 h-52 w-full object-cover rounded-2xl"
        />

        <div className="col-span-5">

          <h2 className="text-5xl font-bold">
            Royal Palace Hall
          </h2>

          <div className="flex items-center gap-2 text-gray-500 mt-4">
            <MapPin size={18} />
            Bangalore, Karnataka
          </div>

          <div className="grid grid-cols-3 gap-6 mt-8">

            <div>
              <Calendar className="text-purple-600" />
              <p className="text-gray-500 mt-2">
                Event Date
              </p>
              <h4 className="font-semibold">
                15 Dec 2025
              </h4>
            </div>

            <div>
              <Users className="text-purple-600" />
              <p className="text-gray-500 mt-2">
                Guests
              </p>
              <h4 className="font-semibold">
                500
              </h4>
            </div>

            <div>
              <Clock className="text-purple-600" />
              <p className="text-gray-500 mt-2">
                Duration
              </p>
              <h4 className="font-semibold">
                Full Day
              </h4>
            </div>

          </div>

        </div>

        <div className="col-span-4 border-l pl-8">

          <p className="text-gray-500">
            Estimated Total
          </p>

          <h1 className="text-6xl font-bold mt-2">
            ₹99,000
          </h1>

          <p className="text-gray-500 mt-3">
            Includes all taxes and charges
          </p>

        </div>

      </div>

    </div>
  );
}