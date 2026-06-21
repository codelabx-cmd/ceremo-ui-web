import {
  Download,
  Calendar,
  Phone,
  ChevronRight
} from "lucide-react";

export default function NextActions() {

  const actions = [
    {
      icon: Download,
      title: "Download Invoice"
    },
    {
      icon: Calendar,
      title: "Add To Calendar"
    },
    {
      icon: Phone,
      title: "Contact Vendor"
    }
  ];

  return (
    <div className="bg-white border rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        What would you like to do next?
      </h2>

      <div className="space-y-4">

        {actions.map((item) => (
          <button
            key={item.title}
            className="w-full border rounded-2xl p-5 flex justify-between items-center hover:bg-gray-50"
          >

            <div className="flex items-center gap-4">

              <item.icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>

            </div>

            <ChevronRight />

          </button>
        ))}

      </div>

    </div>
  );
}