export default function RecommendedServices() {
  return (
    <div className="bg-white border rounded-3xl p-8">

      <div className="flex justify-between">

        <h2 className="text-3xl font-bold">
          You May Also Need
        </h2>

        <button className="text-purple-600">
          Explore More
        </button>

      </div>

      <div className="grid grid-cols-4 gap-6 mt-8">

        {[
          "Photography",
          "Decoration",
          "Catering",
          "Makeup"
        ].map((item) => (
          <div
            key={item}
            className="border rounded-2xl overflow-hidden"
          >

            <div className="h-40 bg-gray-200" />

            <div className="p-4">

              <h4 className="font-semibold">
                {item}
              </h4>

              <button className="mt-4 w-full border border-purple-600 text-purple-600 py-2 rounded-xl">
                Explore
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}