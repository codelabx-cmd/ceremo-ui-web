export default function GoogleButton() {
  return (
    <button
      className="
      w-full
      border
      rounded-xl
      py-4
      flex
      justify-center
      items-center
      gap-3
      hover:bg-gray-50
      transition
      "
    >
      <img
        src="https://www.google.com/favicon.ico"
        alt="google"
        className="w-5 h-5"
      />

      Continue with Google
    </button>
  );
}