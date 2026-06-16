export default function MarketplaceNavbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-purple-600">
          Ceremo
        </h1>

        <div className="hidden lg:flex gap-8 font-medium">

          <a href="#">Venues</a>
          <a href="#">Photography</a>
          <a href="#">Catering</a>
          <a href="#">Decoration</a>
          <a href="#">Entertainment</a>

        </div>

        <div className="flex items-center gap-5">

          <button>♡</button>

          <button>🛒</button>

          <div className="flex items-center gap-2">

            <div className="w-10 h-10 rounded-full bg-purple-200" />

            <span>Priya Sharma</span>

          </div>

        </div>

      </div>

    </nav>
  );
}