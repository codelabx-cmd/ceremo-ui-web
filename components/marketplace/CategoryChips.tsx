export default function CategoryChips() {

  const categories = [
    "All Categories",
    "Venues",
    "Photography",
    "Catering",
    "Decoration",
    "Entertainment",
    "Makeup",
  ];

  return (
    <section className="px-8 mt-10">

      <div className="flex gap-4 flex-wrap">

        {categories.map((category, index) => (

          <button
            key={category}
            className={`
              px-6
              py-4
              rounded-2xl
              border
              transition

              ${
                index === 0
                  ? "bg-purple-100 text-purple-700 border-purple-300"
                  : "bg-white hover:bg-gray-50"
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}