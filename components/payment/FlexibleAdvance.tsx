"use client";

import { useState } from "react";

export default function FlexibleAdvance() {

  const total = 90000;

  const [advance, setAdvance] = useState(30);

  const advanceAmount =
    Math.round((total * advance) / 100);

  return (
    <div className="bg-white rounded-3xl border shadow-sm p-6">

      <div className="flex justify-between mb-8">

        <h2 className="text-2xl font-bold">
          Choose Advance Amount (Flexible)
        </h2>

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
          Recommended: 30%
        </span>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        <div>

          <h3 className="font-semibold mb-3">
            Pay Advance
          </h3>

          <p className="text-gray-500 mb-6">
            Select any amount between the minimum and
            maximum advance.
          </p>

          <input
            type="range"
            min={20}
            max={50}
            value={advance}
            onChange={(e) =>
              setAdvance(Number(e.target.value))
            }
            className="w-full"
          />

          <div className="flex justify-between mt-5">

            <div>
              <p className="text-sm text-gray-500">
                Min 20%
              </p>

              <p>₹18,000</p>
            </div>

            <div className="text-center">

              <p className="font-bold text-purple-600">
                {advance}%
              </p>

              <p>
                ₹{advanceAmount.toLocaleString()}
              </p>
            </div>

            <div className="text-right">

              <p className="text-sm text-gray-500">
                Max 50%
              </p>

              <p>₹45,000</p>
            </div>

          </div>

        </div>

        <div className="space-y-4">

          <div className="bg-purple-50 rounded-2xl p-6">

            <p className="text-gray-500">
              You Pay Now
            </p>

            <h2 className="text-5xl font-bold text-purple-600 mt-2">
              ₹{advanceAmount.toLocaleString()}
            </h2>

            <p className="mt-2 text-gray-500">
              Advance ({advance}%)
            </p>

          </div>

          <div className="bg-yellow-50 rounded-2xl p-5">

            <p className="text-gray-700">
              📅 Remaining amount can be paid before
              the event or on the event date.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}