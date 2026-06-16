export default function SearchBar() {
  return (

    <div
      className="
      bg-white/90
      backdrop-blur-md
      rounded-2xl
      shadow-2xl
      p-3
      flex
      flex-col
      md:flex-row
      gap-3
      mt-10
      "
    >

      <input
        type="text"
        placeholder="📍 Enter Location"
        className="
        flex-1
        px-5
        py-4
        rounded-xl
        border
        outline-none
        "
      />

      <input
        type="text"
        placeholder="🏛 Search Vendor or Service"
        className="
        flex-1
        px-5
        py-4
        rounded-xl
        border
        outline-none
        "
      />

      <button
        className="
        bg-purple-600
        hover:bg-purple-700
        text-white
        px-8
        py-4
        rounded-xl
        font-semibold
        "
      >
        Search
      </button>

    </div>

  );
}