import {
  CheckCircle,
  Calendar
} from "lucide-react";

export default function BookingTimeline() {
  return (
    <div className="bg-white border rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        Your Booking Timeline
      </h2>

      <div className="space-y-8">

        <div className="flex gap-4">

          <CheckCircle
            size={26}
            className="text-green-600"
          />

          <div>

            <h4 className="font-semibold">
              Booking Created
            </h4>

            <p className="text-gray-500 text-sm">
              10 May 2026
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <CheckCircle
            size={26}
            className="text-green-600"
          />

          <div>

            <h4 className="font-semibold">
              Advance Payment Successful
            </h4>

            <p className="text-green-600 font-bold">
              ₹29,700
            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <Calendar
            size={26}
            className="text-purple-600"
          />

          <div>

            <h4 className="font-semibold">
              Remaining Payment
            </h4>

            <p className="text-purple-600 font-bold">
              ₹69,300
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}