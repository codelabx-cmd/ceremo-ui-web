export default function SortBar() {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      p-4
      flex
      justify-between
      items-center
      "
    >
      <p className="text-gray-500">
        Showing 1,234 Results
      </p>

      <select
        className="
        border
        rounded-xl
        px-4
        py-2
        "
      >
        <option>Popularity</option>
        <option>Price Low → High</option>
        <option>Price High → Low</option>
        <option>Newest</option>
      </select>
    </div>
  );
}