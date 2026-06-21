import MarketplaceNavbar from "@/components/marketplace/MarketplaceNavbar";
import AdvanceSelector from "@/components/payment/AdvanceSelector";
import BenefitsStrip from "@/components/payment/BenefitsStrip";
import BookingStepper from "@/components/payment/BookingStepper";
import BookingSummaryCard from "@/components/payment/BookingSummaryCard";
import PaymentMethods from "@/components/payment/PaymentMethods";

export default function PaymentPage() {
    return (
        <div className="bg-[#fafafa] min-h-screen">
            <MarketplaceNavbar />
            <BookingStepper />
            <div className="max-w-7xl mx-auto px-8 pt-4 pb-32">

                <h1 className="text-5xl font-bold">
                    Confirm Your Booking
                </h1>

                <p className="text-gray-500 mt-3 text-lg">
                    Secure your date with a flexible advance payment.
                </p>

                <div className="mt-6">
                    <BookingSummaryCard />
                </div>

                <div className="mt-8">
                    <AdvanceSelector />
                </div>

                <div className="mt-8">
                    <PaymentMethods />
                </div>

                <div className="mt-8">
                    <BenefitsStrip />
                </div>

            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

                    <div>
                        <p className="text-gray-500">
                            Pay Today (30% Advance)
                        </p>

                        <h2 className="text-4xl font-bold text-purple-600">
                            ₹29,700
                        </h2>
                    </div>

                    <div className="text-center">
                        <p className="text-green-600 font-semibold">
                            Secure Payment
                        </p>

                        <p className="text-gray-500 text-sm">
                            Powered by Razorpay
                        </p>
                    </div>

                    <button className="px-12 py-5 rounded-2xl text-white font-semibold text-xl bg-gradient-to-r from-purple-600 to-fuchsia-500">
                        Pay ₹29,700 Advance
                    </button>

                </div>
            </div>

        </div>
    );
}