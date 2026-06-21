export default function ReviewSummary() {
  return (
    <div className="sticky top-8 h-fit">

      <div className="bg-white rounded-3xl border shadow-sm p-6">

        <h2 className="text-2xl font-bold mb-6">
          Price Summary
        </h2>

        <div className="space-y-4 pb-6 border-b">

          <div className="flex justify-between">
            <span>Venue Booking</span>
            <span>₹50,000</span>
          </div>

          <div className="flex justify-between">
            <span>Photography Package</span>
            <span>₹15,000</span>
          </div>

          <div className="flex justify-between">
            <span>Decoration Package</span>
            <span>₹25,000</span>
          </div>

        </div>

        <div className="py-6 border-b">

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₹90,000</span>
          </div>

          <div className="flex justify-between">
            <span>Taxes & Charges</span>
            <span>₹9,000</span>
          </div>

        </div>

        <div className="py-6">

          <div className="flex justify-between items-center">

            <span className="font-semibold">
              Total Amount
            </span>

            <span className="text-3xl font-bold text-purple-600">
              ₹99,000
            </span>

          </div>

        </div>

        <button
          className="
            w-full
            h-14
            rounded-xl
            bg-gradient-to-r
            from-purple-700
            to-purple-500
            text-white
            font-semibold
          "
        >
          Proceed To Payment →
        </button>

      </div>

    </div>
  );
}