export default function PaymentMethods() {
  return (
    <div className="bg-white border rounded-3xl p-8">

      <h2 className="text-3xl font-bold">
        Choose Payment Method
      </h2>

      <div className="grid grid-cols-4 gap-5 mt-8">

        <div className="border-2 border-purple-600 rounded-2xl p-6 bg-purple-50
shadow-md">
          <h3 className="font-bold">UPI</h3>
          <p className="text-gray-500">
            GPay • PhonePe • Paytm
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold">Card</h3>
          <p className="text-gray-500">
            Visa • Mastercard
          </p>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold">
            Net Banking
          </h3>
        </div>

        <div className="border rounded-2xl p-6">
          <h3 className="font-bold">
            Wallet
          </h3>
        </div>

      </div>

    </div>
  );
}