"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function FoamWashPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      {/* ─── HERO SECTION ─── */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-blue-900 overflow-hidden">
        {/* Background Image / Pattern overlay (simulated) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay">
           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjNDAyNjY2Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMjI0NDg4IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-30" />
           <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center text-blue-200 hover:text-white mb-8 text-sm font-semibold transition-colors background-blur-sm px-3 py-1 rounded bg-black/20">
            <span className="material-icons text-sm mr-1">arrow_back</span> Back to Services
          </Link>
          <span className="block text-[#FFB703] font-bold tracking-widest uppercase mb-4 text-sm drop-shadow-md">Premium Detailing</span>
          <h1 className="font-display font-black text-5xl md:text-6xl text-white mb-6 uppercase tracking-tight shadow-black/50 drop-shadow-xl">
            Ultimate Foam Wash
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Experience the safest, most effective way to clean your vehicle. Our high-pressure foam technology lifts dirt away without scratching your paint.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
             <button className="bg-[#FFB703] hover:bg-yellow-400 text-black font-black uppercase px-8 py-4 rounded shadow-lg transition-transform transform hover:-translate-y-1">
               Book Now - ₹350
             </button>
             <Link href="/loyalty" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold uppercase px-8 py-4 rounded transition-colors shadow-lg">
               Loyalty Program
             </Link>
          </div>
        </div>
      </section>

      {/* ─── WHAT IS IT SECTION ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card-dark border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
              WHY CHOOSE <span className="text-blue-600 dark:text-blue-400">FOAM WASH?</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFB703] mb-8" />
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Traditional bucket-and-sponge washing is the leading cause of swirl marks and micro-scratches on modern vehicle clear coats. When you scrub a dirty car, you're essentially dragging abrasive sand and grit across the paintwork.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              At MDK Auto Spa, our <strong className="text-gray-900 dark:text-white">High-Pressure Snow Foam Wash</strong> utilizes advanced pH-neutral detergents that blanket your car in a thick foam. This foam clings to the surface, breaking down dirt, road grime, and oils, safely lifting them away from the paint <em className="italic">before</em> we ever touch the vehicle.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-700">
             {/* Placeholder for an actual image */}
             <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <span className="material-icons text-blue-300 dark:text-blue-700 text-6xl opacity-50">local_car_wash</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
               <span className="text-white font-bold text-lg drop-shadow-md">Thick clinging foam safely lifts dirt</span>
             </div>
          </div>
        </div>
      </section>

      {/* ─── THE PROCESS SECTION ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-background-dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 uppercase">
              The MDK Process
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              We never cut corners. Here is exactly what happens when you book a Foam Wash with us.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:left-0 md:before:right-0 before:w-1 before:bg-blue-200 dark:before:bg-blue-900/50">
            
            {/* Step 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="hidden md:block w-1/2 px-8"></div>
              <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-4 border-gray-50 dark:border-background-dark text-white font-bold text-sm shadow">1</div>
              <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="material-icons text-blue-500">water_drop</span> Pre-Rinse Power Wash
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We start with a high-pressure (but paint-safe) water rinse to remove loose surface dirt, mud, and dust from the body, wheels, and wheel arches.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="hidden md:block w-1/2 px-8"></div>
              <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-4 border-gray-50 dark:border-background-dark text-white font-bold text-sm shadow">2</div>
              <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="material-icons text-blue-500">cloud</span> Snow Foam Blanket
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Using our specialized foam cannon, we coat the entire vehicle in a thick layer of pH-neutral cleaning foam. We let it dwell for 5 minutes, allowing it to encapsulate dirt particles and safely lift them from the paint.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="hidden md:block w-1/2 px-8"></div>
              <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-4 border-gray-50 dark:border-background-dark text-white font-bold text-sm shadow">3</div>
              <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="material-icons text-blue-500">cleaning_services</span> Safe Contact Wash
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We use ultra-soft microfiber mitts and a strict two-bucket method (one for wash soap, one for rinsing the mitt) to gently clean the vehicle surface without reintroducing dirt.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="hidden md:block w-1/2 px-8"></div>
              <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-4 border-gray-50 dark:border-background-dark text-white font-bold text-sm shadow">4</div>
              <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="material-icons text-blue-500">air</span> Final Rinse & Air Dry
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    A thorough final rinse removes all soap residue. We then dry the vehicle using premium plush microfiber towels and forced air in crevices to prevent water spots and drips.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="hidden md:block w-1/2 px-8"></div>
              <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-4 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center border-4 border-gray-50 dark:border-background-dark text-white font-bold text-sm shadow">5</div>
              <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                <div className="bg-white dark:bg-card-dark p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="material-icons text-blue-500">tire_repair</span> Tire Dressing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We finish off by cleaning the wheels thoroughly and applying a non-sling, premium tire shine to give your vehicle that fresh-off-the-lot look.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── PRICING BANNER ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-black text-4xl mb-4">Transparent Pricing</h2>
          <p className="text-blue-100 text-lg mb-8">Premium care shouldn't come with premium confusion.</p>
          
          <div className="bg-blue-900 p-8 rounded-2xl shadow-2xl inline-block w-full max-w-sm border border-blue-500">
            <h3 className="text-2xl font-bold mb-2">Exterior Foam Wash</h3>
            <div className="text-[#FFB703] font-black text-6xl mb-4 relative drop-shadow-lg">
              <span className="text-3xl absolute -left-6 top-1">₹</span>350
            </div>
            <p className="text-blue-200 text-sm mb-6 border-b border-blue-700 pb-6">
              Includes complete exterior process: pre-rinse, foam, safe wash, wheel cleaning, and tire shine.
            </p>
            <ul className="text-left space-y-3 mb-8 text-sm">
               <li className="flex items-center gap-2"><span className="material-icons text-green-400">check_circle</span> 100% Scratch-Free Method</li>
               <li className="flex items-center gap-2"><span className="material-icons text-green-400">check_circle</span> pH Neutral Products</li>
               <li className="flex items-center gap-2"><span className="material-icons text-green-400">check_circle</span> Safe for Ceramic Coatings</li>
               <li className="flex items-center gap-2"><span className="material-icons text-green-400">check_circle</span> Usually completed in ~45 mins</li>
            </ul>
            <button className="w-full bg-[#FFB703] hover:bg-yellow-400 text-black font-black uppercase py-4 rounded transition-colors shadow-lg text-lg">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 py-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} MDK Auto Spa & Travels. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
