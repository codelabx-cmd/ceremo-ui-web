export default function Stats() {
  return (

    <div
      className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-6
      mt-16
      "
    >

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-3xl font-bold text-purple-600">
          500+
        </h3>
        <p className="text-gray-600">
          Vendors
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-3xl font-bold text-purple-600">
          10K+
        </h3>
        <p className="text-gray-600">
          Events
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-3xl font-bold text-purple-600">
          50+
        </h3>
        <p className="text-gray-600">
          Cities
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-3xl font-bold text-purple-600">
          4.9★
        </h3>
        <p className="text-gray-600">
          Rating
        </p>
      </div>

    </div>

  );
}