"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {

  useEffect(() => {
    const stored = localStorage.getItem("color-theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section className="relative bg-background-dark overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary blur-3xl opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-semibold mb-4 backdrop-blur-sm">
              ✨ #1 Car Care in Nayagarh
            </span>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              REVIVE YOUR <br />
              <span className="text-primary text-shadow">RIDE&apos;S GLORY</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Experience premium automotive care with MDK Auto Spa. From foam
              washing to ceramic coating, we give your car the royal treatment
              it deserves.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="#book"
                className="px-8 py-4 rounded-lg bg-primary text-gray-900 font-bold text-lg hover:bg-yellow-400 shadow-[0_0_20px_rgba(255,193,7,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Service
              </a>
              <a
                href="#loyalty"
                className="px-8 py-4 rounded-lg bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Join Loyalty Club
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Luxury Car Detailing"
                className="w-full h-auto object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdaxd0s-rRDGCTq4v3GLcRXZhnfBFXzy_lWr-nLeS0ykAPJqcGrTnoookKp1J08zjwUoDGJsAVUQ1QsB2uOqKruhX8ZO-QoXTQat29ckUK_8QwNnSO_v3alPpemgamtbqo1aIjrejpHmMeVtgC9WITESRaqrXVbzbHUHIcyLqE8bhqimZqY-uvIIOQfNj9f-sDPZxet5Szd2mSazo5YsTP7rjY0VpaeaVIN5PpdX0yC_NYslD7k05qEYk0MV141Ix2BNWJlmYBDYU"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-xl">Ceramic Coating Experts</p>
                <p className="text-sm opacity-80">
                  Protecting your investment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section
        className="py-20 bg-background-light dark:bg-background-dark"
        id="services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl text-gray-900 dark:text-white mb-4">
              Our Premium Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of car care services designed to
              keep your vehicle looking brand new.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Foam Wash */}
            <div className="group bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                  <span className="material-icons text-3xl">local_car_wash</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white">Foam Wash</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">High-pressure foam wash that removes dirt and grime without scratching your paintwork.</p>
                <a href="#" className="inline-flex items-center text-secondary dark:text-primary font-semibold text-sm hover:underline">
                  Learn More <span className="material-icons text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Rubbing & Polishing */}
            <div className="group bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-purple-50 dark:bg-purple-900/20 rounded-full transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                  <span className="material-icons text-3xl">auto_fix_high</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white">Rubbing &amp; Polishing</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Restore your car&apos;s shine by removing minor scratches, swirls, and oxidation.</p>
                <a href="#" className="inline-flex items-center text-secondary dark:text-primary font-semibold text-sm hover:underline">
                  Learn More <span className="material-icons text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Ceramic Coating */}
            <div className="group bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-indigo-50 dark:bg-indigo-900/20 rounded-full transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                  <span className="material-icons text-3xl">shield</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white">Ceramic Coating</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Long-lasting protection against UV rays, chemicals, and environmental contaminants.</p>
                <a href="#" className="inline-flex items-center text-secondary dark:text-primary font-semibold text-sm hover:underline">
                  Learn More <span className="material-icons text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* PPF Installation */}
            <div className="group bg-card-light dark:bg-card-dark rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-green-50 dark:bg-green-900/20 rounded-full transition-transform group-hover:scale-150 duration-500" />
              <div className="relative z-10">
                <div className="h-14 w-14 rounded-full bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-gray-900 transition-colors duration-300">
                  <span className="material-icons text-3xl">layers</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white">PPF Installation</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Paint Protection Film to guard your vehicle&apos;s most vulnerable areas from rock chips.</p>
                <a href="#" className="inline-flex items-center text-secondary dark:text-primary font-semibold text-sm hover:underline">
                  Learn More <span className="material-icons text-sm ml-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOYALTY SECTION ─── */}
      <section
        className="py-24 bg-gray-900 relative overflow-hidden"
        id="loyalty"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(#4b5563 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left - Text */}
            <div className="w-full lg:w-1/2">
              <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-6">
                UNLOCK EXCLUSIVE <br />
                <span className="text-primary">REWARDS</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Join the MDK Auto Spa Loyalty Program today. Every wash gets you
                closer to free services and massive discounts. It&apos;s our way
                of saying thank you for choosing the best.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  {
                    title: "Get 50% OFF on your 5th Wash",
                    sub: "Half price on your fifth visit.",
                  },
                  {
                    title:
                      "After your next 5 washes, get your 6th Wash FREE",
                    sub: "Your 11th wash overall is completely on us!",
                  },
                  {
                    title: "Priority Booking",
                    sub: "Skip the queue with member-only slots.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start">
                    <span className="material-icons text-primary mr-3 mt-1">
                      check_circle
                    </span>
                    <div>
                      <strong className="text-white block text-lg">
                        {item.title}
                      </strong>
                      <span className="text-gray-400 text-sm">
                        {item.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition shadow-lg transform hover:scale-105 cursor-pointer">
                Get Your Card Now
              </button>
            </div>

            {/* Right - Loyalty Card Visual */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-black rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800 relative transform rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25" />
                <div className="relative bg-black rounded-xl p-6 h-full border border-gray-800">
                  {/* Card Top */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="text-white">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                        Vehicle Number
                      </p>
                      <div className="bg-white/10 h-8 w-32 rounded border border-white/20" />
                    </div>
                    <div className="text-right">
                      <h3 className="font-display font-black text-xl md:text-2xl text-secondary-light leading-none">
                        MDK AUTOSPA
                      </h3>
                      <h3 className="font-display font-black text-xl md:text-2xl text-primary leading-none">
                        LOYALTY CARD
                      </h3>
                    </div>
                  </div>

                  {/* Stamps Row 1 */}
                  <div className="flex flex-col gap-4 mb-6 px-1">
                    <div className="grid grid-cols-5 gap-3">
                      <div className="aspect-square rounded-full border-2 border-secondary-light flex items-center justify-center">
                        <span className="material-icons text-secondary-light text-xl opacity-50">
                          check
                        </span>
                      </div>
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={`r1-${i}`}
                          className="aspect-square rounded-full border-2 border-secondary-light"
                        />
                      ))}
                      <div className="aspect-square rounded-full bg-primary border-2 border-primary flex flex-col items-center justify-center text-center transform scale-125 shadow-[0_0_15px_rgba(255,193,7,0.6)] z-10 relative">
                        <span className="text-gray-900 font-black text-[10px] leading-none">
                          50%
                        </span>
                        <span className="text-gray-900 font-bold text-[8px] leading-none">
                          OFF
                        </span>
                      </div>
                    </div>

                    {/* Stamps Row 2 */}
                    <div className="grid grid-cols-6 gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={`r2-${i}`}
                          className="aspect-square rounded-full border-2 border-secondary-light"
                        />
                      ))}
                      <div className="aspect-square rounded-full bg-primary border-2 border-primary flex flex-col items-center justify-center text-center transform scale-125 shadow-[0_0_15px_rgba(255,193,7,0.6)] z-10 relative">
                        <span className="text-gray-900 font-black text-[10px] leading-none">
                          FREE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="text-center mt-6 border-t border-gray-800 pt-4">
                    <p className="text-white text-xs font-medium uppercase tracking-wide">
                      Get{" "}
                      <span className="text-primary font-bold">50% OFF</span>{" "}
                      on 5th Wash &{" "}
                      <span className="text-primary font-bold">FREE</span> Wash
                      after 6 more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BADGES ─── */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Certified Experts */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
                <span className="material-icons text-4xl">verified</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white">Certified Experts</h3>
              <p className="text-gray-600 dark:text-gray-400">Our team consists of trained professionals who treat every car with utmost care and precision.</p>
            </div>

            {/* Premium Products */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 dark:text-yellow-400">
                <span className="material-icons text-4xl">star</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white">Premium Products</h3>
              <p className="text-gray-600 dark:text-gray-400">We only use top-tier international brands for cleaning, polishing, and coating your vehicle.</p>
            </div>

            {/* Eco-Friendly */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                <span className="material-icons text-4xl">eco</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-gray-900 dark:text-white">Eco-Friendly</h3>
              <p className="text-gray-600 dark:text-gray-400">Our wash systems are designed to minimize water wastage while delivering superior results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section
        className="py-16 bg-gradient-to-r from-secondary to-blue-900 text-white"
        id="contact"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">
            Ready to Transform Your Car?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center bg-white/10 px-6 py-4 rounded-lg backdrop-blur-sm border border-white/20">
              <span className="material-icons text-primary mr-3">
                location_on
              </span>
              <div className="text-left">
                <p className="text-xs text-gray-300 uppercase">Visit Us</p>
                <p className="font-semibold">
                  New Ghadual, Near Pusp Restaurant, Nayagarh
                </p>
              </div>
            </div>
            <div className="flex items-center bg-white/10 px-6 py-4 rounded-lg backdrop-blur-sm border border-white/20">
              <span className="material-icons text-primary mr-3">phone</span>
              <div className="text-left">
                <p className="text-xs text-gray-300 uppercase">Call Us</p>
                <p className="font-semibold">9090204893 / 8328907662</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-gray-100 dark:bg-gray-950 pt-16 pb-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="font-display font-black text-2xl text-secondary dark:text-primary">
                  MDK AUTO SPA
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
                Maa Dakhinakali Autospa and Travels. Providing world-class car
                detailing services in Nayagarh. We bring the shine back to your
                drive.
              </p>
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.944 2.013 9.284 2 11.714 2h.601zm-.391 1.442h-.409c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "#" },
                  { label: "Services", href: "#services" },
                  { label: "Loyalty Program", href: "#loyalty" },
                  { label: "Gallery", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} MDK Auto Spa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
