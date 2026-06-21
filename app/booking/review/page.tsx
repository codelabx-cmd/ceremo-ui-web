import MarketplaceNavbar from "@/components/marketplace/MarketplaceNavbar";
import ReviewStepper from "@/components/review/ReviewStepper";
import ReviewSummary from "@/components/review/ReviewSummary";
import SelectedServices from "@/components/review/SelectedServices";
import SpecialRequirements from "@/components/review/SpecialRequirements";
import VenueReviewCard from "@/components/review/VenueReviewCard";

export default function ReviewBookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
        <MarketplaceNavbar />
      <div className="max-w-7xl mx-auto px-6 py-8">

        <ReviewStepper />

        <div className="mt-10">

          <h1 className="text-4xl font-bold">
            Review Your Booking
          </h1>

          <p className="text-gray-500 mt-2">
            Please review your booking details before proceeding to payment.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          <div className="lg:col-span-2 space-y-6">

            <VenueReviewCard />

            <SelectedServices />

            <SpecialRequirements />

            {/* <TrustBadges /> */}

          </div>

          <ReviewSummary />

        </div>

      </div>

    </div>
  );
}