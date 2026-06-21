export default function AdvanceSelector() {
  return (
    <div className="bg-white border rounded-3xl p-8">

      <div className="flex justify-between">

        <h2 className="text-3xl font-bold">
          Choose Advance Percentage
        </h2>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
          Recommended 30%
        </span>

      </div>

      <div className="grid grid-cols-6 gap-5 mt-8">

        <div className="border rounded-2xl p-5 text-center">
          <h3 className="text-4xl font-bold">20%</h3>
          <p>₹19,800</p>
        </div>

        <div className="border-2 border-purple-600 rounded-2xl p-5 text-center">
          <h3 className="text-4xl font-bold text-purple-600">
            30%
          </h3>
          <p>₹29,700</p>
        </div>

        <div className="border rounded-2xl p-5 text-center">
          <h3 className="text-4xl font-bold">40%</h3>
          <p>₹39,600</p>
        </div>

        <div className="border rounded-2xl p-5 text-center">
          <h3 className="text-4xl font-bold">50%</h3>
          <p>₹49,500</p>
        </div>

      </div>

      <input
        type="range"
        min="20"
        max="50"
        value="30"
        className="w-full mt-8"
      />

      <div className="grid grid-cols-2 gap-6 mt-8">

        <div className="bg-purple-50 rounded-3xl p-6">

          <p className="text-gray-500">
            You Pay Today
          </p>

          <h1 className="text-6xl font-bold text-purple-600">
            ₹29,700
          </h1>

        </div>

        <div className="bg-green-50 rounded-3xl p-6">

          <p className="text-gray-500">
            Remaining Amount
          </p>

          <h1 className="text-6xl font-bold text-green-600">
            ₹69,300
          </h1>

        </div>

      </div>

    </div>
  );
}