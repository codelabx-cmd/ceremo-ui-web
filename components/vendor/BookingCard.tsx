export default function BookingCard() {
  return (
    <div className="sticky top-10">

      <div className="bg-white rounded-3xl p-8 shadow-lg border">

        <p className="text-gray-500">
          Starting From
        </p>

        <h2 className="text-5xl font-bold text-purple-600 my-4">
          ₹50,000
        </h2>

        <p className="text-gray-600">
          / day
        </p>

        <hr className="my-6"/>

        <h3 className="font-semibold text-xl mb-4">
          Check Availability
        </h3>

        <input
          type="date"
          className="w-full border rounded-xl p-3 mb-4"
        />

        <select className="w-full border rounded-xl p-3 mb-6">
          <option>500-1000 Guests</option>
        </select>

        <button className="w-full py-4 bg-purple-600 text-white rounded-xl font-semibold">
          Book Now
        </button>

        <p className="text-center text-green-600 mt-4">
          ✓ Secure Booking
        </p>

      </div>

    </div>
  );
}