export default function FilterSidebar() {
  return (
    <div className="bg-white rounded-3xl p-6 border">

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Filters</h3>
        <button className="text-purple-600 text-sm">
          Reset
        </button>
      </div>

      <div className="mt-8">

        <h4 className="font-semibold mb-4">
          Category
        </h4>

        <div className="space-y-3">

          {[
            "Venues",
            "Photography",
            "Catering",
            "Decoration",
            "Entertainment",
            "Makeup",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3"
            >
              <input type="checkbox" />
              {item}
            </label>
          ))}

        </div>

      </div>

      <div className="mt-10">

        <h4 className="font-semibold mb-4">
          Price Range
        </h4>

        <input
          type="range"
          className="w-full"
        />

        <div className="flex justify-between mt-2 text-sm text-gray-500">
          <span>₹0</span>
          <span>₹2,00,000+</span>
        </div>

      </div>

      <div className="mt-10">

        <h4 className="font-semibold mb-4">
          Rating
        </h4>

        <div className="space-y-2">

          <button className="border px-4 py-2 rounded-xl w-full text-left">
            ⭐ 5.0
          </button>

          <button className="border px-4 py-2 rounded-xl w-full text-left">
            ⭐ 4.0 & up
          </button>

          <button className="border px-4 py-2 rounded-xl w-full text-left">
            ⭐ 3.0 & up
          </button>

        </div>

      </div>

      <div className="mt-10">

        <h4 className="font-semibold mb-4">
          Location
        </h4>

        <input
          placeholder="Enter city"
          className="border rounded-xl p-3 w-full"
        />

      </div>

    </div>
  );
}