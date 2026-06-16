export default function CTA() {
  return (

    <section
      className="
      py-24
      bg-gradient-to-r
      from-purple-600
      to-violet-700
      text-white
      "
    >

      <div className="max-w-5xl mx-auto text-center px-8">

        <h2 className="text-5xl font-bold">
          Ready to Plan Your Dream Event?
        </h2>

        <p className="mt-6 text-xl text-purple-100">
          Discover the best venues and vendors
          for weddings, birthdays and corporate events.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <a
            href="/register"
            className="
            bg-white
            text-purple-700
            px-8
            py-4
            rounded-xl
            font-semibold
            "
          >
            Get Started
          </a>

          <a
            href="/marketplace"
            className="
            border
            border-white
            px-8
            py-4
            rounded-xl
            "
          >
            Explore Vendors
          </a>

        </div>

      </div>

    </section>
  );
}