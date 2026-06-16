import { ReactNode } from "react";
import MarketingPanel from "./MarketingPanel";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/3">
        <MarketingPanel />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-6">
        {children}
      </div>

    </div>
  );
}