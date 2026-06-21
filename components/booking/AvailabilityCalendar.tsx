export default function AvailabilityCalendar() {
  const dates = [
    { day: "Sun", date: "14", status: "available" },
    { day: "Mon", date: "15", status: "selected" },
    { day: "Tue", date: "16", status: "available" },
    { day: "Wed", date: "17", status: "available" },
    { day: "Thu", date: "18", status: "available" },
    { day: "Fri", date: "19", status: "available" },
    { day: "Sat", date: "20", status: "booked" },
    { day: "Sun", date: "21", status: "available" },
    { day: "Mon", date: "22", status: "available" },
    { day: "Tue", date: "23", status: "available" },
    { day: "Wed", date: "24", status: "available" },
    { day: "Thu", date: "25", status: "booked" },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h3 className="text-2xl font-bold">
            Check Availability
          </h3>

          <p className="text-gray-500 mt-1">
            Select your preferred date
          </p>
        </div>

        <div className="flex gap-6 text-sm">

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span>Available</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span>Booked</span>
          </div>

        </div>

      </div>

      {/* Month */}
      <div className="flex items-center gap-6 mb-8">

        <h4 className="font-semibold text-lg">
          December 2025
        </h4>

        <button className="text-xl">
          ←
        </button>

        <button className="text-xl">
          →
        </button>

      </div>

      {/* Dates */}
      <div className="flex gap-4 overflow-x-auto pb-2">

        {dates.map((date) => (
          <button
            key={date.date}
            className={`
              min-w-[80px]
              h-[80px]
              rounded-xl
              border
              flex
              flex-col
              items-center
              justify-center
              transition-all
              ${
                date.status === "selected"
                  ? "bg-purple-600 text-white border-purple-600"
                  : date.status === "booked"
                  ? "bg-red-50 border-red-300 text-red-500"
                  : "bg-green-50 border-green-300 text-green-700"
              }
            `}
          >
            <span className="text-xs font-medium">
              {date.day}
            </span>

            <span className="text-xl font-bold">
              {date.date}
            </span>
          </button>
        ))}

      </div>

      <p className="text-sm text-gray-500 mt-6">
        Prices may vary for selected dates
      </p>

    </div>
  );
}