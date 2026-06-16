export default function Footer() {
  return (

    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold text-purple-400">
              Ceremo
            </h2>

            <p className="mt-4 text-gray-400">
              Plan. Book. Celebrate.
            </p>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Company
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>About</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Services
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>Venues</p>
              <p>Catering</p>
              <p>Photography</p>
            </div>

          </div>

          <div>

            <h3 className="font-bold mb-4">
              Legal
            </h3>

            <div className="space-y-2 text-gray-400">
              <p>Privacy Policy</p>
              <p>Terms</p>
            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500">

          © 2026 Ceremo. All rights reserved.

        </div>

      </div>

    </footer>
  );
}