export default function Testimonials() {

  const testimonials = [
    {
      name: "Priya & Rahul",
      text: "Ceremo helped us find the perfect wedding venue within 2 days.",
    },
    {
      name: "Ashwin Kumar",
      text: "Booking vendors became incredibly simple and transparent.",
    },
    {
      name: "Sneha Sharma",
      text: "The best platform for planning events and celebrations.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            What Customers Say
          </h2>

          <p className="mt-4 text-gray-500">
            Trusted by thousands of event planners
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {testimonials.map((testimonial) => (

            <div
              key={testimonial.name}
              className="
              bg-white
              rounded-3xl
              shadow-lg
              p-8
              "
            >

              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-4 text-gray-600">
                "{testimonial.text}"
              </p>

              <h4 className="mt-6 font-bold">
                {testimonial.name}
              </h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}