import Image from "next/image";

export default function VenueReviewCard() {
  return (
    <div className="bg-white rounded-3xl border shadow-sm p-6">

      <h2 className="font-bold text-xl mb-5">
        Venue Details
      </h2>

      <div className="flex gap-6">

        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
          alt="venue"
          width={320}
          height={220}
          className="rounded-2xl object-cover"
        />

        <div className="flex-1">

          <h3 className="text-3xl font-bold">
            Royal Palace Hall
          </h3>

          <p className="mt-3 text-gray-500">
            📍 Bangalore, Karnataka
          </p>

          <div className="flex gap-3 mt-4">

            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
              Banquet Hall
            </span>

            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
              500-1000 Guests
            </span>

            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
              ✓ Verified Vendor
            </span>

          </div>

          <p className="mt-4 text-purple-600 font-semibold">
            ⭐ 4.9 (128 Reviews)
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-8 pt-8 border-t">

        <div>
          <p className="text-gray-500 text-sm">
            Event Date
          </p>
          <h4 className="font-semibold">
            15 Dec 2025
          </h4>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Guests
          </p>
          <h4 className="font-semibold">
            500 Guests
          </h4>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Time
          </p>
          <h4 className="font-semibold">
            10AM - 10PM
          </h4>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            Event Type
          </p>
          <h4 className="font-semibold">
            Wedding
          </h4>
        </div>

      </div>

    </div>
  );
}