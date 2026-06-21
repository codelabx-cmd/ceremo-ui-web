export default function PaymentBenefits() {
  return (
    <div className="grid md:grid-cols-4 gap-4">

      <div className="bg-white border rounded-2xl p-5">
        <h3 className="font-semibold">
          Date Hold Guarantee
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Date reserved once advance is paid.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-5">
        <h3 className="font-semibold">
          Flexible Payments
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Pay remaining later.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-5">
        <h3 className="font-semibold">
          No Hidden Charges
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Transparent pricing.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-5">
        <h3 className="font-semibold">
          24x7 Support
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Help whenever needed.
        </p>
      </div>

    </div>
  );
}