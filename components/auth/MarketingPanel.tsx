export default function MarketingPanel() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-purple-50 to-purple-100 p-12 flex flex-col">

      {/* Logo */}
      <div className="text-4xl font-bold text-purple-600">
        Ceremo
      </div>

      {/* Heading */}
      <div className="mt-20">
        <h1 className="text-6xl font-bold leading-tight">
          Plan.
          <br />
          Book.
          <br />
          <span className="text-purple-600">
            Celebrate
          </span>
        </h1>

        <p className="mt-8 text-gray-600 text-lg">
          Find the best venues, photographers,
          caterers and event services for your
          special moments.
        </p>
      </div>

      {/* Features */}
      <div className="mt-16 space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-xl">
            🏛️
          </div>
          <span>Top Quality Vendors</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-xl">
            🛡️
          </div>
          <span>Secure Bookings</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-xl">
            📅
          </div>
          <span>Easy & Fast</span>
        </div>
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 right-0 h-72 bg-[url('/wedding.jpg')] bg-cover bg-center rounded-tr-3xl" />
    </div>
  );
}