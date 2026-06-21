export default function InfoBanner() {
  return (
    <div
      className="
      bg-purple-50
      border
      border-purple-100
      rounded-2xl
      p-5
      flex
      items-center
      gap-4
    "
    >
      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
        🛡️
      </div>

      <p className="text-gray-700 font-medium">
        Your date will be held and confirmed only after
        the advance payment.
      </p>
    </div>
  );
}