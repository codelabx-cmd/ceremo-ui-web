import { CheckCircle, Copy } from "lucide-react";

export default function ConfirmationHero() {
  return (
    <div className="text-center">

      <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">

        <CheckCircle
          className="text-green-600"
          size={50}
        />

      </div>

      <h1 className="text-5xl font-bold mt-6">
        Booking Confirmed!
      </h1>

      <p className="text-gray-500 text-lg mt-3">
        Your advance payment was successful.
      </p>

      <p className="text-gray-500">
        Your date has been reserved.
      </p>

      <div className="mt-6 inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-green-50 border border-green-200">

        <div>
          <p className="text-sm text-gray-500">
            Booking ID
          </p>

          <h3 className="text-3xl font-bold text-green-700">
            CER-2026-001245
          </h3>
        </div>

        <Copy
          size={20}
          className="cursor-pointer"
        />

      </div>

    </div>
  );
}