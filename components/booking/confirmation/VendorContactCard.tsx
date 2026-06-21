import {
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";

export default function VendorContactCard() {
  return (
    <div className="bg-white border rounded-3xl p-8">

      <h3 className="text-2xl font-bold">
        Vendor Contact
      </h3>

      <div className="mt-6">

        <h4 className="font-semibold text-xl">
          Royal Palace Hall
        </h4>

        <div className="mt-4 space-y-3">

          <div className="flex gap-3">
            <Phone size={18} />
            +91 9876543210
          </div>

          <div className="flex gap-3">
            <Mail size={18} />
            contact@royalpalace.com
          </div>

        </div>

      </div>

      <button className="mt-6 border border-purple-600 text-purple-600 px-6 py-3 rounded-xl">

        <MessageCircle size={18} />

        Message Vendor

      </button>

    </div>
  );
}