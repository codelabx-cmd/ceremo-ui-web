export default function MarketplaceHero() {
  return (
    <section className="px-8 pt-8">

      <div
        className="
        relative
        overflow-hidden
        rounded-[32px]
        min-h-[520px]
        bg-gradient-to-r
        from-purple-900
        via-purple-800
        to-violet-700
        "
      >

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 p-12">

          <div className="max-w-2xl">

            <p className="text-purple-200">
              Marketplace
            </p>

            <h1
              className="
              text-white
              text-6xl
              font-bold
              mt-4
              leading-tight
              "
            >
              Find The Perfect Vendors
              For Your Special Event
            </h1>

            <p
              className="
              text-purple-100
              text-xl
              mt-6
              "
            >
              Discover and book the best
              venues, photographers,
              caterers and decorators.
            </p>

          </div>

        </div>

        {/* Search Card */}

        <div
          className="
          absolute
          left-1/2
          -translate-x-1/2
          bottom-8
          bg-white
          rounded-3xl
          shadow-2xl
          p-4
          w-[90%]
          max-w-5xl
          "
        >

          <div
            className="
            grid
            md:grid-cols-4
            gap-4
            "
          >

            <input
              placeholder="📍 Bangalore"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="🏛 Category"
              className="border rounded-xl p-4"
            />

            <input
              placeholder="📅 Event Date"
              className="border rounded-xl p-4"
            />

            <button
              className="
              bg-purple-600
              text-white
              rounded-xl
              font-semibold
              "
            >
              Search
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}