"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import GoogleButton from "@/components/auth/GoogleButton";

export default function LoginPage() {
  return (
    <AuthLayout>
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-lg p-10">

        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to your account
          </p>
        </div>

        <div className="mt-10 space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="
            w-full
            border
            rounded-xl
            px-4
            py-4
            "
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="
            w-full
            border
            rounded-xl
            px-4
            py-4
            "
          />

          <div className="text-right">
            <button className="text-purple-600">
              Forgot password?
            </button>
          </div>

          <button
            className="
            w-full
            bg-purple-600
            hover:bg-purple-700
            text-white
            rounded-xl
            py-4
            font-semibold
            "
          >
            Login
          </button>

          <div className="text-center text-gray-500">
            or
          </div>

          <GoogleButton />

          <div className="text-center mt-4">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-purple-600 font-semibold"
            >
              Register
            </a>
          </div>

        </div>
      </div>
    </AuthLayout>
  );
}