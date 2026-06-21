export default function Amenities() {

  const items = [
    "AC Hall",
    "Parking",
    "Bridal Room",
    "DJ Setup",
    "Security",
    "Generator Backup",
    "Catering",
    "Decoration"
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow">

      <h2 className="text-2xl font-bold mb-6">
        Amenities
      </h2>

      <div className="flex flex-wrap gap-3">

        {items.map((item) => (
          <div
            key={item}
            className="px-4 py-2 bg-purple-50 rounded-full"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}