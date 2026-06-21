export default function BenefitsStrip() {
  return (
    <div className="bg-white rounded-3xl border p-8">

      <div className="grid grid-cols-4 gap-6">

        <div>
          <h3 className="font-bold">
            Date Hold Guarantee
          </h3>

          <p className="text-gray-500 mt-2">
            Date reserved once advance is paid.
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            Flexible Payments
          </h3>

          <p className="text-gray-500 mt-2">
            Pay remaining later.
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            No Hidden Charges
          </h3>

          <p className="text-gray-500 mt-2">
            Transparent pricing.
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            24x7 Support
          </h3>

          <p className="text-gray-500 mt-2">
            We're here to help.
          </p>
        </div>

      </div>

    </div>
  );
}