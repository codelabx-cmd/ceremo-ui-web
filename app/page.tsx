import Categories from "@/components/landing/Categories";
import CTA from "@/components/landing/CTA";
import FeaturedVendors from "@/components/landing/FeaturedVendors";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Navbar from "@/components/landing/Navbar";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <Categories />
      <FeaturedVendors />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </>
    // <main className="min-h-screen bg-white">

    //   {/* Navbar */}
    //   <nav className="flex items-center justify-between px-10 py-6 border-b">

    //     <h1 className="text-3xl font-bold text-purple-600">
    //       Ceremo
    //     </h1>

    //     <div className="hidden md:flex gap-8 text-gray-700">
    //       <a href="#">Venues</a>
    //       <a href="#">Photography</a>
    //       <a href="#">Catering</a>
    //       <a href="#">Decoration</a>
    //     </div>

    //     <div className="flex gap-4">
    //       <a
    //         href="/login"
    //         className="px-5 py-2 text-purple-600 font-medium"
    //       >
    //         Login
    //       </a>

    //       <a
    //         href="/register"
    //         className="bg-purple-600 text-white px-5 py-2 rounded-lg"
    //       >
    //         Register
    //       </a>
    //     </div>

    //   </nav>

    //   {/* Hero */}
    //   <section className="bg-gradient-to-r from-purple-50 to-purple-100">

    //     <div className="max-w-7xl mx-auto px-10 py-24">

    //       <div className="grid lg:grid-cols-2 gap-16 items-center">

    //         <div>

    //           <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm">
    //             India's Event Booking Platform
    //           </span>

    //           <h1 className="mt-6 text-6xl font-bold leading-tight">

    //             Plan Your

    //             <span className="block text-purple-600">
    //               Perfect Celebration
    //             </span>

    //           </h1>

    //           <p className="mt-6 text-xl text-gray-600">
    //             Find venues, photographers,
    //             caterers and event planners
    //             all in one place.
    //           </p>

    //           <div className="mt-10 flex gap-4">

    //             <button className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold">
    //               Explore Vendors
    //             </button>

    //             <button className="border px-8 py-4 rounded-xl">
    //               Learn More
    //             </button>

    //           </div>

    //         </div>

    //         <div>

    //           <img
    //             src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
    //             alt="Wedding"
    //             className="rounded-3xl shadow-2xl"
    //           />

    //         </div>

    //       </div>

    //     </div>

    //   </section>

    //   {/* Categories */}

    //   <section className="py-24">

    //     <div className="max-w-7xl mx-auto px-10">

    //       <h2 className="text-4xl font-bold text-center">
    //         Browse Categories
    //       </h2>

    //       <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

    //         {[
    //           "🏛 Venues",
    //           "📸 Photography",
    //           "🍽 Catering",
    //           "🎵 DJ",
    //           "🌸 Decoration",
    //           "💄 Makeup",
    //         ].map((item) => (
    //           <div
    //             key={item}
    //             className="
    //             bg-white
    //             shadow-md
    //             rounded-2xl
    //             p-6
    //             text-center
    //             hover:shadow-xl
    //             transition
    //             cursor-pointer
    //             "
    //           >
    //             {item}
    //           </div>
    //         ))}

    //       </div>

    //     </div>

    //   </section>

    //   {/* Featured Vendors */}

    //   <section className="bg-gray-50 py-24">

    //     <div className="max-w-7xl mx-auto px-10">

    //       <h2 className="text-4xl font-bold text-center">
    //         Featured Vendors
    //       </h2>

    //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

    //         {[1, 2, 3].map((item) => (
    //           <div
    //             key={item}
    //             className="
    //             bg-white
    //             rounded-3xl
    //             overflow-hidden
    //             shadow-lg
    //             "
    //           >

    //             <img
    //               src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622"
    //               alt="Vendor"
    //               className="h-60 w-full object-cover"
    //             />

    //             <div className="p-6">

    //               <h3 className="font-bold text-xl">
    //                 Royal Palace Hall
    //               </h3>

    //               <p className="text-gray-500 mt-2">
    //                 Bangalore
    //               </p>

    //               <div className="mt-4 flex justify-between">

    //                 <span>⭐ 4.8</span>

    //                 <span className="font-bold">
    //                   ₹50,000/day
    //                 </span>

    //               </div>

    //             </div>

    //           </div>
    //         ))}

    //       </div>

    //     </div>

    //   </section>

    //   {/* How It Works */}

    //   <section className="py-24">

    //     <div className="max-w-6xl mx-auto px-10">

    //       <h2 className="text-4xl font-bold text-center">
    //         How It Works
    //       </h2>

    //       <div className="grid md:grid-cols-4 gap-8 mt-16">

    //         {[
    //           "Search",
    //           "Compare",
    //           "Book",
    //           "Celebrate",
    //         ].map((step, index) => (
    //           <div
    //             key={step}
    //             className="text-center"
    //           >
    //             <div
    //               className="
    //               w-16
    //               h-16
    //               rounded-full
    //               bg-purple-600
    //               text-white
    //               flex
    //               items-center
    //               justify-center
    //               mx-auto
    //               text-xl
    //               "
    //             >
    //               {index + 1}
    //             </div>

    //             <h3 className="mt-6 text-xl font-semibold">
    //               {step}
    //             </h3>

    //           </div>
    //         ))}

    //       </div>

    //     </div>

    //   </section>

    //   {/* CTA */}

    //   <section className="py-24 bg-purple-600">

    //     <div className="text-center text-white">

    //       <h2 className="text-5xl font-bold">
    //         Ready to Plan Your Event?
    //       </h2>

    //       <p className="mt-6 text-xl">
    //         Join thousands of happy customers.
    //       </p>

    //       <a
    //         href="/register"
    //         className="
    //         inline-block
    //         mt-8
    //         bg-white
    //         text-purple-600
    //         px-8
    //         py-4
    //         rounded-xl
    //         font-semibold
    //         "
    //       >
    //         Get Started
    //       </a>

    //     </div>

    //   </section>

    //   {/* Footer */}

    //   <footer className="bg-gray-900 text-white py-12">

    //     <div className="max-w-7xl mx-auto px-10">

    //       <h2 className="text-3xl font-bold">
    //         Ceremo
    //       </h2>

    //       <p className="text-gray-400 mt-4">
    //         Plan. Book. Celebrate.
    //       </p>

    //     </div>

    //   </footer>

    // </main>
  );
}