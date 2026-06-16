export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">

      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-white">
          Ceremo
        </h1>

        <div className="hidden md:flex gap-8 text-white">

          <a href="#">Venues</a>
          <a href="#">Photography</a>
          <a href="#">Catering</a>
          <a href="#">Decoration</a>

        </div>

        <div className="flex gap-4">

          <a
            href="/login"
            className="text-white"
          >
            Login
          </a>

          <a
            href="/register"
            className="
            bg-white
            text-purple-700
            px-5
            py-2
            rounded-lg
            font-semibold
            "
          >
            Register
          </a>

        </div>

      </div>

    </nav>
  );
}