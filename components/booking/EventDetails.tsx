export default function EventDetails() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Event Details
        </h2>

        <p className="text-gray-500 mt-1">
          Tell the vendor about your event
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Event Type */}

        <div>
          <label className="block mb-2 font-medium">
            Event Type *
          </label>

          <select className="w-full h-14 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Wedding</option>
            <option>Reception</option>
            <option>Birthday Party</option>
            <option>Corporate Event</option>
            <option>Engagement</option>
          </select>
        </div>

        {/* Guest Count */}

        <div>
          <label className="block mb-2 font-medium">
            Guest Count *
          </label>

          <input
            type="number"
            placeholder="500"
            className="w-full h-14 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Start Time */}

        <div>
          <label className="block mb-2 font-medium">
            Start Time *
          </label>

          <input
            type="time"
            className="w-full h-14 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* End Time */}

        <div>
          <label className="block mb-2 font-medium">
            End Time *
          </label>

          <input
            type="time"
            className="w-full h-14 px-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

      </div>

      {/* Requirements */}

      <div className="mt-8">

        <label className="block mb-2 font-medium">
          Special Requirements
        </label>

        <textarea
          rows={5}
          placeholder="Describe your event requirements, decoration theme, food preferences, stage setup, parking needs, etc."
          className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

      </div>

      {/* Quick Chips */}

      <div className="mt-8">

        <label className="block mb-3 font-medium">
          Quick Requirements
        </label>

        <div className="flex flex-wrap gap-3">

          {[
            "Stage Setup",
            "Live Music",
            "DJ",
            "Decoration",
            "Valet Parking",
            "Photography",
            "Videography",
            "Catering"
          ].map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-full bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}