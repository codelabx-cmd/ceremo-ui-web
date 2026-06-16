// src/components/marketplace/VendorCard.tsx

import Image from "next/image";
import { Heart, MapPin, Star } from "lucide-react";
import { Vendor } from "./MarketplaceData";

interface Props {
  vendor: Vendor;
}

export default function VendorCard({ vendor }: Props) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all">

      <div className="relative h-56">

        <Image
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  alt="venue"
  fill
  className="object-cover"
/>

        <button
          className="
          absolute
          top-4
          right-4
          bg-white
          w-12
          h-12
          rounded-full
          shadow-lg
          flex
          items-center
          justify-center
          "
        >
          <Heart size={20} />
        </button>

        <div
          className="
          absolute
          bottom-4
          left-4
          bg-green-500
          text-white
          px-3
          py-1
          rounded-full
          text-sm
          "
        >
          ✓ Verified
        </div>

      </div>

      <div className="p-5">

        <div className="flex justify-between">

          <h3 className="font-bold text-xl">
            {vendor?.name}
          </h3>

          <div className="flex items-center gap-1 text-purple-600">
            <Star size={16} fill="currentColor" />
            {vendor?.rating}
          </div>

        </div>

        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <MapPin size={14} />
          {vendor?.location}
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">

          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            {vendor?.category}
          </span>

          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
            {vendor?.capacity}
          </span>

        </div>

        <div className="border-t my-5" />

        <p className="text-gray-500 text-sm">
          Starting from
        </p>

        <div className="flex justify-between items-center mt-2">

          <div>
            <h3 className="text-3xl font-bold text-purple-600">
              {vendor?.price}
            </h3>

            <p className="text-gray-500">/ day</p>
          </div>

          <button
            className="
            border
            border-purple-600
            text-purple-600
            px-5
            py-3
            rounded-xl
            font-semibold
            hover:bg-purple-600
            hover:text-white
            transition
            "
          >
            View Details
          </button>

        </div>

      </div>

    </div>
  );
}