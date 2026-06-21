export default function SelectedServices() {
  return (
    <div className="bg-white rounded-3xl border p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-6">
        Selected Services & Add-ons
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between items-center border rounded-xl p-4">
          <div>
            <h3 className="font-semibold">
              Photography Package
            </h3>

            <p className="text-gray-500 text-sm">
              Professional photography & videography
            </p>
          </div>

          <span className="text-purple-600 font-bold text-xl">
            ₹15,000
          </span>
        </div>

        <div className="flex justify-between items-center border rounded-xl p-4">
          <div>
            <h3 className="font-semibold">
              Decoration Package
            </h3>

            <p className="text-gray-500 text-sm">
              Floral & stage decoration
            </p>
          </div>

          <span className="text-purple-600 font-bold text-xl">
            ₹25,000
          </span>
        </div>

      </div>

    </div>
  );
}