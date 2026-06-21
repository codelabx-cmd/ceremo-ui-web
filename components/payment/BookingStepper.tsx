export default function BookingStepper() {
  return (
    <div className="flex items-center justify-center gap-4 py-8">

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
          ✓
        </div>
        <span>Booking Details</span>
      </div>

      <div className="w-16 h-[2px] bg-purple-600" />

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
          ✓
        </div>
        <span>Review</span>
      </div>

      <div className="w-16 h-[2px] bg-purple-600" />

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
          3
        </div>
        <span className="font-semibold text-purple-600">
          Advance Payment
        </span>
      </div>

      <div className="w-16 h-[2px] bg-gray-300" />

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center">
          4
        </div>
        <span className="text-gray-500">
          Confirmation
        </span>
      </div>

    </div>
  );
}