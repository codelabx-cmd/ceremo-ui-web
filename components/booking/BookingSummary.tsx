export default function BookingSummary() {
  return (
    <div className="lg:sticky lg:top-8 h-fit">

      <div className="bg-white rounded-3xl border shadow-sm p-6">

        <h2 className="text-2xl font-bold mb-6">
          Booking Summary
        </h2>

        {/* Venue */}

        <div className="pb-6 border-b">

          <h3 className="font-semibold text-lg">
            Royal Palace Hall
          </h3>

          <p className="text-gray-500 mt-1">
            Bangalore, Karnataka
          </p>

        </div>

        {/* Details */}

        <div className="py-6 space-y-4 border-b">

          <div className="flex justify-between">
            <span className="text-gray-500">Event Date</span>
            <span className="font-medium">
              15 Dec 2025
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Guests</span>
            <span className="font-medium">
              500
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Duration</span>
            <span className="font-medium">
              Full Day
            </span>
          </div>

        </div>

        {/* Pricing */}

        <div className="py-6 space-y-4 border-b">

          <div className="flex justify-between">
            <span>Venue Booking</span>
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
            <span>Taxes & Fees</span>
            <span>₹9,000</span>
          </div>

        </div>

        {/* Total */}

        <div className="py-6">

          <div className="flex justify-between items-center">

            <span className="text-lg font-medium">
              Total Amount
            </span>

            <span className="text-3xl font-bold text-purple-600">
              ₹99,000
            </span>

          </div>

        </div>

        {/* CTA */}

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
            hover:opacity-90
            transition
          "
        >
          Continue To Payment
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Secure payment powered by Razorpay
        </p>

      </div>

    </div>
  );
}