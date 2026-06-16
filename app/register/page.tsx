"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import GoogleButton from "@/components/auth/GoogleButton";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-xl p-10">

        <h1 className="text-4xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Join Ceremo and start planning
        </p>

        <div className="mt-8 space-y-4">

          <input
            placeholder="Full Name"
            className="w-full border rounded-xl px-4 py-4"
          />

          <input
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-4"
          />

          <input
            placeholder="Phone Number"
            className="w-full border rounded-xl px-4 py-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-xl px-4 py-4"
          />

          <div className="grid grid-cols-2 gap-4">

            <button className="border rounded-xl p-4">
              Customer
            </button>

            <button className="border rounded-xl p-4">
              Vendor
            </button>

          </div>

          <button
            className="
            w-full
            bg-purple-600
            text-white
            py-4
            rounded-xl
            font-semibold
            "
          >
            Create Account
          </button>

          <div className="text-center text-gray-500">
            or
          </div>

          <GoogleButton />

        </div>
      </div>
    </AuthLayout>
  );
}