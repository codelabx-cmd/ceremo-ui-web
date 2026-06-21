import BookingProtectedCard from "@/components/booking/confirmation/BookingProtectedCard";
import BookingTimeline from "@/components/booking/confirmation/BookingTimeline";
import ConfirmationHero from "@/components/booking/confirmation/ConfirmationHero";
import NextActions from "@/components/booking/confirmation/NextActions";
import RecommendedServices from "@/components/booking/confirmation/RecommendedServices";
import VendorContactCard from "@/components/booking/confirmation/VendorContactCard";
import MarketplaceNavbar from "@/components/marketplace/MarketplaceNavbar";
import BookingStepper from "@/components/payment/BookingStepper";
import BookingSummaryCard from "@/components/payment/BookingSummaryCard";


export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <MarketplaceNavbar />

      <BookingStepper/>

      <div className="max-w-7xl mx-auto px-8 py-10">

        <ConfirmationHero />

        <div className="flex justify-center gap-4 mt-6">

    <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white rounded-xl font-semibold shadow-md hover:scale-105 transition">
      Go To Dashboard
    </button>

    <button className="px-8 py-3 bg-white border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition">
      Download Invoice
    </button>

  </div>

  {/* NEW SUCCESS BANNER */}
  <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl px-6 py-4 text-center">
    <p className="text-green-700 font-medium">
      🎉 Vendor has been notified and will contact you within 24 hours.
    </p>
  </div>
        
        <div className="mt-10">
          <BookingSummaryCard />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">

          <BookingTimeline />

          <NextActions />

        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">

          <VendorContactCard />

          <BookingProtectedCard />

        </div>

        <div className="mt-8">
          <RecommendedServices />
        </div>

      </div>
    </div>
  );
}