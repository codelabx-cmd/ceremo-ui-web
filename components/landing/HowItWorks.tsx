export default function HowItWorks() {
  const steps = [
    "Search Vendors",
    "Compare Options",
    "Book Services",
    "Celebrate",
  ];

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-5xl font-bold">
          How Ceremo Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step, index) => (
            <div key={step}>

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-purple-600
                text-white
                flex
                items-center
                justify-center
                text-2xl
                font-bold
                mx-auto
                "
              >
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {step}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}