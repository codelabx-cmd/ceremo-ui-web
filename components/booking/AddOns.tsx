export default function AddOns() {
  const addOns = [
    {
      title: "Photography Package",
      desc: "Professional photographers & videographers",
      price: "₹15,000",
      icon: "📸",
    },
    {
      title: "Decoration Package",
      desc: "Premium floral & stage decoration",
      price: "₹25,000",
      icon: "🌸",
    },
    {
      title: "Live Music & DJ",
      desc: "Professional entertainment setup",
      price: "₹18,000",
      icon: "🎵",
    },
    {
      title: "Premium Catering",
      desc: "Luxury buffet menu",
      price: "₹35,000",
      icon: "🍽️",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 border shadow-sm">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Enhance Your Event
        </h2>

        <p className="text-gray-500">
          Optional services to make your celebration memorable
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {addOns.map((item) => (
          <div
            key={item.title}
            className="border rounded-2xl p-5 hover:border-purple-400 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex justify-between">

              <div>

                <div className="text-3xl mb-3">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {item.desc}
                </p>

              </div>

              <input
                type="checkbox"
                className="h-5 w-5 accent-purple-600"
              />

            </div>

            <div className="mt-4 text-purple-600 font-bold text-xl">
              {item.price}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}