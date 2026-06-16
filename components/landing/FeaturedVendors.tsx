export default function FeaturedVendors() {
  const vendors = [1, 2, 3];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-center">

          <div>
            <h2 className="text-5xl font-bold">
              Featured Vendors
            </h2>

            <p className="text-gray-500 mt-3">
              Top rated vendors near you
            </p>
          </div>

          <button className="text-purple-600 font-semibold">
            View All →
          </button>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {vendors.map((vendor) => (
            <div
              key={vendor}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition
              "
            >

              <img
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
                alt="Vendor"
                className="h-64 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  Royal Palace Hall
                </h3>

                <p className="text-gray-500 mt-2">
                  Bangalore
                </p>

                <div className="flex justify-between mt-5">

                  <span className="font-semibold">
                    ⭐ 4.9
                  </span>

                  <span className="text-purple-600 font-bold">
                    ₹50,000/day
                  </span>

                </div>

                <button
                  className="
                  mt-6
                  w-full
                  bg-purple-600
                  text-white
                  py-3
                  rounded-xl
                  "
                >
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}