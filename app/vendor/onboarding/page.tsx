import MarketplaceNavbar from "@/components/marketplace/MarketplaceNavbar";
import BusinessInformation from "@/components/vendor-onboarding/BusinessInformation";
import OnboardingSidebar from "@/components/vendor-onboarding/OnboardingSidebar";
import ServiceCategories from "@/components/vendor-onboarding/ServiceCategories";

export default function VendorOnboardingPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <MarketplaceNavbar />
      <div className="max-w-7xl mx-auto px-8 py-10">

        <div className="grid grid-cols-12 gap-8">

          {/* Sidebar */}
          <div className="col-span-3">
            <OnboardingSidebar />
          </div>

          {/* Form */}
          <div className="col-span-9">
            <BusinessInformation />
          </div>
        
          <div className="col-span-9">
            <ServiceCategories />
          </div>
        </div>

      </div>

    </div>
  );
}