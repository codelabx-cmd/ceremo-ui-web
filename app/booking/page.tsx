import BookingHeader from "@/components/booking/BookingHeader";
import AvailabilityCalendar from "@/components/booking/AvailabilityCalendar";
import EventDetails from "@/components/booking/EventDetails";
import AddOns from "@/components/booking/AddOns";
import BookingSummary from "@/components/booking/BookingSummary";
import MarketplaceNavbar from "@/components/marketplace/MarketplaceNavbar";
// import EventDetails from "@/components/booking/EventDetails";
// import AddOns from "@/components/booking/AddOns";
// import BookingSummary from "@/components/booking/BookingSummary";
// import Benefits from "@/components/booking/Benefits";

export default function BookingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
        <MarketplaceNavbar />
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Progress */}

        <div className="flex items-center justify-center gap-24 mb-10">

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
              1
            </div>
            <span className="font-medium">
              Booking Details
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              2
            </div>
            <span>Payment</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border flex items-center justify-center">
              3
            </div>
            <span>Confirmation</span>
          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            <BookingHeader />

            <AvailabilityCalendar />

            <EventDetails />

            <AddOns />

            {/* <Benefits /> */}

          </div>

          <BookingSummary />

        </div>

      </div>

    </div>
  );
}