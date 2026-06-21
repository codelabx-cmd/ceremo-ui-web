"use client";

import {
  Building2,
  Grid3X3,
  ClipboardList,
  IndianRupee,
  ImageIcon,
  CalendarDays,
  Landmark,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    title: "Business Information",
    icon: Building2,
    completed: true,
    // active: false,
  },
  {
    title: "Service Categories",
    icon: Grid3X3,
    active: true,
  },
  {
    title: "Service Details",
    icon: ClipboardList,
  },
  {
    title: "Pricing Packages",
    icon: IndianRupee,
  },
  {
    title: "Media Uploads",
    icon: ImageIcon,
  },
  {
    title: "Availability",
    icon: CalendarDays,
  },
  {
    title: "Bank Details",
    icon: Landmark,
  },
  {
    title: "Review & Submit",
    icon: CheckCircle2,
  },
];

export default function OnboardingSidebar() {
  return (
    <div className="bg-white border rounded-3xl p-6 sticky top-8">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Vendor Setup
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Complete your onboarding
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>12%</span>
        </div>

        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[12%] bg-purple-600 rounded-full" />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-2">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className={`
                flex items-center gap-3
                px-4 py-3 rounded-xl
                transition
                ${
                  step.active
                    ? "bg-purple-50 border border-purple-200"
                    : "hover:bg-gray-50"
                }
              `}
            >
              <div
                className={`
                  h-10 w-10 rounded-full
                  flex items-center justify-center
                  ${
                    step.active
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }
                `}
              >
                <Icon size={18} />
              </div>

              <div>
                <p
                  className={`
                    text-sm font-medium
                    ${
                      step.active
                        ? "text-purple-700"
                        : "text-gray-700"
                    }
                  `}
                >
                  {step.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 p-4 rounded-xl bg-green-50 border border-green-100">
        <p className="text-sm font-medium text-green-700">
          Draft Auto Saved
        </p>

        <p className="text-xs text-green-600 mt-1">
          Last saved just now
        </p>
      </div>

    </div>
  );
}