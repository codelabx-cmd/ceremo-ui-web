export default function BookingSummaryV2() {

  const total = 99000;
  const advance = 27000;
  const remaining = total - advance;

  return (
    <div className="space-y-4">

      <div className="bg-white rounded-3xl shadow border overflow-hidden">

        <div className="p-6 border-b">

          <h2 className="text-2xl font-bold">
            Booking Summary
          </h2>

          <p className="text-gray-500 mt-1">
            Royal Palace Hall
          </p>

        </div>

        <div className="p-6 space-y-4">

          <div className="bg-gray-50 rounded-2xl p-4">

            <p className="text-sm text-gray-500">
              Estimated Total
            </p>

            <h3 className="text-4xl font-bold">
              ₹{total.toLocaleString()}
            </h3>

          </div>

          <div className="bg-purple-50 rounded-2xl p-4">

            <p className="text-sm text-gray-500">
              Pay Now
            </p>

            <h3 className="text-4xl font-bold text-purple-600">
              ₹{advance.toLocaleString()}
            </h3>

            <p className="text-purple-500">
              Advance Payment (30%)
            </p>

          </div>

          <div className="bg-green-50 rounded-2xl p-4">

            <p className="text-sm text-gray-500">
              Pay Later
            </p>

            <h3 className="text-3xl font-bold text-green-700">
              ₹{remaining.toLocaleString()}
            </h3>

            <p className="text-green-600">
              On or before event date
            </p>

          </div>

        </div>

        <div className="p-6 border-t">

          <button
            className="
            w-full
            h-14
            rounded-2xl
            text-white
            font-semibold
            bg-gradient-to-r
            from-purple-600
            to-purple-500
          "
          >
            Pay ₹27,000 Advance
          </button>

          <div className="mt-4 text-sm text-center text-gray-500">

            <div>
              🔒 Secure Payment
            </div>

            <div>
              ⚡ Instant Booking Confirmation
            </div>

          </div>

        </div>

      </div>

      <div className="bg-white rounded-3xl border p-5">

        <h3 className="font-semibold mb-3">
          Included Services
        </h3>

        <div className="space-y-2 text-gray-600">

          <div className="flex justify-between">
            <span>Venue</span>
            <span>₹50,000</span>
          </div>

          <div className="flex justify-between">
            <span>Photography</span>
            <span>₹15,000</span>
          </div>

          <div className="flex justify-between">
            <span>Decoration</span>
            <span>₹25,000</span>
          </div>

          <div className="flex justify-between">
            <span>Taxes</span>
            <span>₹9,000</span>
          </div>

        </div>

      </div>

    </div>
  );
}