import Image from "next/image";

export default function BookingHeader() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow">

      <div className="flex gap-6">

        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
          alt="Venue"
          width={350}
          height={200}
          className="rounded-2xl object-cover"
        />

        <div>

          <h2 className="text-4xl font-bold">
            Royal Palace Hall
          </h2>

          <p className="mt-3 text-purple-600 font-semibold">
            ⭐ 4.9 (128 Reviews)
          </p>

          <p className="text-gray-500 mt-2">
            📍 Bangalore, Karnataka
          </p>

          <div className="flex gap-3 mt-5">

            <span className="px-4 py-2 bg-purple-100 rounded-full text-purple-600">
              Banquet Hall
            </span>

            <span className="px-4 py-2 bg-purple-100 rounded-full text-purple-600">
              500-1000 Guests
            </span>

            <span className="px-4 py-2 bg-green-100 rounded-full text-green-600">
              ✓ Verified Vendor
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}