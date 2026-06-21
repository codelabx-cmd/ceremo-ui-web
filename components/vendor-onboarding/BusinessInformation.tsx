"use client";

import { Building2, User, Mail, Phone, MapPin } from "lucide-react";

export default function BusinessInformation() {
  return (
    <div className="bg-white border rounded-3xl p-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Business Information
        </h1>

        <p className="text-gray-500 mt-2">
          Let's start with some basic information about your business.
        </p>
      </div>

      {/* Form */}
      <div className="grid grid-cols-2 gap-6">

        {/* Business Name */}
        <div>
          <label className="font-medium block mb-2">
            Business Name *
          </label>

          <div className="relative">
            <Building2
              size={18}
              className="absolute left-4 top-4 text-purple-600"
            />

            <input
              placeholder="Royal Palace Hall"
              className="w-full h-14 pl-12 border rounded-xl outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Business Type */}
        <div>
          <label className="font-medium block mb-2">
            Business Type *
          </label>

          <select className="w-full h-14 px-4 border rounded-xl">
            <option>Proprietorship</option>
            <option>Partnership</option>
            <option>Pvt Ltd</option>
            <option>LLP</option>
          </select>
        </div>

        {/* Contact Person */}
        <div>
          <label className="font-medium block mb-2">
            Owner / Contact Person *
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-4 text-purple-600"
            />

            <input
              placeholder="Priya Sharma"
              className="w-full h-14 pl-12 border rounded-xl"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="font-medium block mb-2">
            Email Address *
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-4 text-purple-600"
            />

            <input
              placeholder="hello@business.com"
              className="w-full h-14 pl-12 border rounded-xl"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="font-medium block mb-2">
            Phone Number *
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-4 text-purple-600"
            />

            <input
              placeholder="+91 9876543210"
              className="w-full h-14 pl-12 border rounded-xl"
            />
          </div>
        </div>

        {/* Alternate Phone */}
        <div>
          <label className="font-medium block mb-2">
            Alternate Phone
          </label>

          <input
            placeholder="+91 9123456789"
            className="w-full h-14 px-4 border rounded-xl"
          />
        </div>

        {/* Category */}
        <div>
          <label className="font-medium block mb-2">
            Business Category *
          </label>

          <select className="w-full h-14 px-4 border rounded-xl">
            <option>Wedding Venue</option>
            <option>Photographer</option>
            <option>Catering</option>
            <option>Decoration</option>
            <option>Makeup Artist</option>
          </select>
        </div>

        {/* Experience */}
        <div>
          <label className="font-medium block mb-2">
            Years In Business
          </label>

          <select className="w-full h-14 px-4 border rounded-xl">
            <option>1-3 Years</option>
            <option>3-5 Years</option>
            <option>5-10 Years</option>
            <option>10+ Years</option>
          </select>
        </div>

      </div>

      {/* Address */}
      <div className="mt-6">
        <label className="font-medium block mb-2">
          Business Address *
        </label>

        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-4 top-4 text-purple-600"
          />

          <textarea
            rows={4}
            placeholder="Enter complete business address"
            className="w-full pl-12 pt-4 border rounded-xl"
          />
        </div>
      </div>

      {/* Logo Upload */}
      <div className="mt-6">
        <label className="font-medium block mb-2">
          Business Logo
        </label>

        <div className="border-2 border-dashed border-purple-300 rounded-2xl p-8 text-center">
          <p className="font-medium">
            Upload Logo
          </p>

          <p className="text-sm text-gray-500 mt-1">
            JPG, PNG, SVG (Max 2MB)
          </p>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end gap-4 mt-8">

        <button className="px-6 py-3 border rounded-xl">
          Save & Exit
        </button>

        <button className="px-8 py-3 text-white rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500">
          Continue →
        </button>

      </div>

    </div>
  );
}