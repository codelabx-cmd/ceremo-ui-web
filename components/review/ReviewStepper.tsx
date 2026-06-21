export default function ReviewStepper() {
  return (
    <div className="flex justify-center items-center gap-12">

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
          ✓
        </div>
        <span>Booking Details</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
          2
        </div>
        <span className="font-semibold text-purple-600">
          Review Booking
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border flex items-center justify-center">
          3
        </div>
        <span>Payment</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border flex items-center justify-center">
          4
        </div>
        <span>Confirmation</span>
      </div>

    </div>
  );
}