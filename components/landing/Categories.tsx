export default function Categories() {
  const categories = [
    {
      icon: "🏛️",
      title: "Venues",
      desc: "Banquet halls & resorts",
    },
    {
      icon: "📸",
      title: "Photography",
      desc: "Capture every moment",
    },
    {
      icon: "🍽️",
      title: "Catering",
      desc: "Delicious menus",
    },
    {
      icon: "🎵",
      title: "Entertainment",
      desc: "DJ & Live Music",
    },
    {
      icon: "🌸",
      title: "Decoration",
      desc: "Beautiful themes",
    },
    {
      icon: "💄",
      title: "Makeup",
      desc: "Professional artists",
    },
  ];

  return (
    <section
  className="
py-24
bg-gradient-to-br
from-violet-50
to-purple-100
"
>

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Explore Categories
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Everything you need for your celebration
          </p>

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

          {categories.map((category) => (
            <div
              key={category.title}
              className="
              bg-white
              border
              rounded-3xl
              p-8
              text-center
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              cursor-pointer
              "
            >
              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-5 font-bold text-xl">
                {category.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {category.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}