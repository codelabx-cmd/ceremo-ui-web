import {
  ShieldCheck,
  CalendarCheck,
  BadgeCheck
} from "lucide-react";

export default function BookingProtectedCard() {
  return (
    <div className="bg-white border rounded-3xl p-8 h-full">

      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <ShieldCheck
            size={26}
            className="text-green-600"
          />
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            Booking Protected
          </h3>

          <p className="text-gray-500 text-sm">
            Your advance payment has secured your date
          </p>
        </div>
      </div>

      <div className="space-y-5">

        <div className="flex items-start gap-4">

          <CalendarCheck
            size={22}
            className="text-purple-600 mt-1"
          />

          <div>
            <h4 className="font-semibold">
              Date Reserved
            </h4>

            <p className="text-gray-500 text-sm">
              Vendor cannot accept another booking for your selected date.
            </p>
          </div>

        </div>

        <div className="flex items-start gap-4">

          <BadgeCheck
            size={22}
            className="text-purple-600 mt-1"
          />

          <div>
            <h4 className="font-semibold">
              Advance Recorded
            </h4>

            <p className="text-gray-500 text-sm">
              ₹29,700 has been successfully credited towards your booking.
            </p>
          </div>

        </div>

        <div className="bg-purple-50 rounded-2xl p-5 mt-6">

          <p className="text-sm text-purple-700 font-medium">
            Remaining balance:
          </p>

          <h3 className="text-4xl font-bold text-purple-600 mt-1">
            ₹69,300
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Pay before or on the event date.
          </p>

        </div>

      </div>
    </div>
  );
}