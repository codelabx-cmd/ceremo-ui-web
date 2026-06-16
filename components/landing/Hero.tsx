import SearchBar from "./SearchBar";
import Stats from "./Stats";

export default function Hero() {
  return (

    <section
      className="
      min-h-screen
      relative
      bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed')]
      bg-cover
      bg-center
      "
    >

      <div className="absolute inset-0 bg-black/50" />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-8
        pt-25
        "
      >

        <div className="max-w-3xl">

          <span
            className="
            bg-white/20
            text-white
            px-4
            py-2
            rounded-full
            "
          >
            India's Event Booking Platform
          </span>

          <h1
            className="
            text-6xl
            md:text-7xl
            font-bold
            text-white
            mt-8
            leading-tight
            "
          >
            Plan Your
            <br />

            Dream Event

            <span className="block text-purple-300">
              Effortlessly
            </span>
          </h1>

          <p
            className="
            text-xl
            text-gray-200
            mt-6
            "
          >
            Discover venues, photographers,
            caterers and event planners all
            in one place.
          </p>

          <SearchBar />

          <Stats />

        </div>

      </div>

    </section>

  );
}