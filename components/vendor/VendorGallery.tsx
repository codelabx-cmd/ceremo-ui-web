import Image from "next/image";

export default function VendorGallery() {
  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="col-span-2">
        <Image
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
          alt="Venue"
          width={1000}
          height={600}
          className="rounded-3xl object-cover h-[450px] w-full"
        />
      </div>

      <div className="space-y-4">

        <Image
          src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a"
          alt="Venue"
          width={500}
          height={300}
          className="rounded-3xl object-cover h-[215px] w-full"
        />

        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
          alt="Venue"
          width={500}
          height={300}
          className="rounded-3xl object-cover h-[215px] w-full"
        />

      </div>

    </div>
  );
}