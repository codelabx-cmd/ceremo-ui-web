"use client";

import { useState } from "react";
import {
  Building2,
  Camera,
  Palette,
  UtensilsCrossed,
  Sparkles,
  Music2,
  CheckCircle2,
} from "lucide-react";

const categories = [
  {
    id: "venue",
    name: "Wedding Venue",
    icon: Building2,
  },
  {
    id: "photography",
    name: "Photography",
    icon: Camera,
  },
  {
    id: "decoration",
    name: "Decoration",
    icon: Palette,
  },
  {
    id: "catering",
    name: "Catering",
    icon: UtensilsCrossed,
  },
  {
    id: "makeup",
    name: "Makeup Artist",
    icon: Sparkles,
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: Music2,
  },
];

export default function ServiceCategories() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <div className="bg-white border rounded-3xl p-8">

      <h1 className="text-4xl font-bold">
        Service Categories
      </h1>

      <p className="text-gray-500 mt-2">
        Select all services your business provides.
      </p>

      <div className="grid grid-cols-3 gap-5 mt-8">

        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selected.includes(category.id);

          return (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`
                relative border rounded-2xl p-6
                text-left transition-all
                ${
                  isSelected
                    ? "border-purple-600 bg-purple-50"
                    : "hover:border-purple-300"
                }
              `}
            >
              {isSelected && (
                <CheckCircle2
                  className="absolute top-4 right-4 text-purple-600"
                  size={20}
                />
              )}

              <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center">
                <Icon
                  size={26}
                  className="text-purple-600"
                />
              </div>

              <h3 className="mt-4 font-semibold text-lg">
                {category.name}
              </h3>
            </button>
          );
        })}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-purple-50">
        <p className="font-medium text-purple-700">
          Selected Categories:
          {" "}
          {selected.length}
        </p>
      </div>

      <div className="flex justify-between mt-10">

        <button className="px-6 py-3 border rounded-xl">
          ← Back
        </button>

        <button className="px-8 py-3 text-white rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500">
          Continue →
        </button>

      </div>

    </div>
  );
}