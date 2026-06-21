export default function VendorInfo() {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white rounded-3xl p-6 shadow">

        <h2 className="text-2xl font-bold mb-4">
          About This Venue
        </h2>

        <p className="text-gray-600 leading-8">
          Royal Palace Hall is a premium wedding and
          event venue located in Bangalore.
          Perfect for weddings, receptions,
          engagements and corporate events.
        </p>

      </div>

      <div className="bg-white rounded-3xl p-6 shadow">

        <h2 className="text-2xl font-bold mb-4">
          Venue Information
        </h2>

        <div className="space-y-3">

          <div className="flex justify-between">
            <span>Capacity</span>
            <span>500-1000 Guests</span>
          </div>

          <div className="flex justify-between">
            <span>Parking</span>
            <span>Available</span>
          </div>

          <div className="flex justify-between">
            <span>Rooms</span>
            <span>20</span>
          </div>

          <div className="flex justify-between">
            <span>Catering</span>
            <span>Available</span>
          </div>

        </div>

      </div>

    </div>
  );
}