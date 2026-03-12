"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import LoyaltyCard from "@/components/LoyaltyCard";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      {/* ─── PAGE HEADER ─── */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-center bg-gray-50/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase mb-4 dark:bg-blue-900/30 dark:text-blue-300">
            Premium Car Care
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-secondary dark:text-primary mb-6 uppercase tracking-tight">
            Our Services & Pricing
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Professional automotive <span className="font-semibold text-gray-900 dark:text-white">detailing</span>, 
            <span className="font-semibold text-gray-900 dark:text-white"> repair</span>, and 
            <span className="font-semibold text-gray-900 dark:text-white"> accessories</span> at unbeatable prices. 
            Experience the premium touch at MDK Auto Spa.
          </p>
        </div>
      </section>

      {/* ─── PRICING CARDS ─── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* COLUMN 1: Washing & Detailing */}
            <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800">
              {/* Header */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-center text-white relative">
                <span className="material-icons absolute top-4 right-4 text-white/20 text-6xl rotate-12">local_car_wash</span>
                <h2 className="font-black text-2xl uppercase tracking-wider relative z-10">Washing &<br/><span className="text-[#FFB703]">Detailing</span></h2>
              </div>
              
              <div className="p-6 flex-grow flex flex-col space-y-6">
                {/* Loyalty Banner */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-800/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1 uppercase tracking-wider">
                      <span className="material-icons text-[12px]">stars</span> Loyalty Rewards
                    </span>
                    <span className="bg-[#FFB703] text-black text-[9px] font-black px-2 py-0.5 rounded uppercase">Save Big</span>
                  </div>
                  <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-2">
                    <span className="text-blue-700 dark:text-blue-400">5th Wash 50% OFF</span> | <span className="text-green-600 dark:text-green-400">6th FREE</span> <span className="text-gray-500 font-normal">(after next 5)</span>
                  </p>
                  <div className="flex gap-1 justify-center">
                    {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full border border-gray-400" />)}
                    <div className="w-3 h-3 rounded-full bg-blue-600 flex items-center justify-center text-[6px] text-white font-bold">50%</div>
                  </div>
                  <div className="flex gap-1 justify-center mt-1">
                    {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-3 rounded-full border border-gray-400" />)}
                    <div className="w-3 h-3 rounded-full bg-[#FFB703] flex items-center justify-center text-[5px] text-black font-bold">FREE</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3 group/link">
                    <div>
                      <Link href="/services/foam-wash" className="font-bold text-gray-900 dark:text-white group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors flex items-center gap-1">
                        Foam Wash <span className="material-icons text-[14px] opacity-0 group-hover/link:opacity-100 transition-opacity">open_in_new</span>
                      </Link>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">High-pressure foam cleaning</p>
                    </div>
                    <span className="font-black text-lg text-blue-900 dark:text-blue-400">₹350</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Interior Polish</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Dashboard & leather care</p>
                    </div>
                    <span className="font-black text-lg text-blue-900 dark:text-blue-400">₹600</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Rubbing & Polishing</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Scratch removal & shine</p>
                    </div>
                    <span className="font-black text-lg text-blue-900 dark:text-blue-400">₹1500</span>
                  </div>
                  <div className="flex justify-between items-center pb-1">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        Ceramic Coating <span className="bg-[#FFB703] text-black text-[9px] font-black px-1.5 py-0.5 rounded">HOT</span>
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Long-lasting protection</p>
                    </div>
                    <span className="font-black text-lg text-blue-900 dark:text-blue-400">₹8000+</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold py-3 rounded text-sm transition-colors shadow-md">
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>

            {/* COLUMN 2: Body Repair */}
            <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800">
              {/* Header */}
              <div className="bg-gradient-to-br from-gray-800 to-black p-6 text-center text-white relative">
                <span className="material-icons absolute top-4 right-4 text-white/10 text-6xl -rotate-12">build</span>
                <h2 className="font-black text-2xl uppercase tracking-wider relative z-10">Body<br/><span className="text-[#FFB703]">Repair</span></h2>
              </div>
              
              <div className="p-6 flex-grow flex flex-col space-y-6 pt-8">
                {/* Services List */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Denting</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Panel beating & alignment</p>
                    </div>
                    <span className="font-black text-base text-[#1E3A8A] dark:text-blue-400">On Inspection</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Full Body Painting</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Premium paint booth finish</p>
                    </div>
                    <span className="font-black text-base text-[#1E3A8A] dark:text-blue-400">Start ₹15k</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Bumper Repair</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Cracks & paint touchups</p>
                    </div>
                    <span className="font-black text-lg text-[#1E3A8A] dark:text-blue-400">₹1200</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">PPF Installation</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Paint Protection Film</p>
                    </div>
                    <span className="font-black text-base text-[#1E3A8A] dark:text-blue-400">Ask Price</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold py-3 rounded text-sm transition-colors shadow-md">
                  GET ESTIMATE
                </button>
              </div>
            </div>

            {/* COLUMN 3: Car Accessories */}
            <div className="bg-white dark:bg-card-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col overflow-hidden border border-gray-100 dark:border-gray-800">
              {/* Header */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 text-center text-white relative">
                <span className="material-icons absolute top-4 right-4 text-white/20 text-6xl rotate-12">shopping_bag</span>
                <h2 className="font-black text-2xl uppercase tracking-wider relative z-10">Car<br/><span className="text-[#FFB703]">Accessories</span></h2>
              </div>
              
              <div className="p-6 flex-grow flex flex-col space-y-6 pt-8">
                {/* Services List */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Seat Covers</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Leather & fabric custom fit</p>
                    </div>
                    <span className="font-black text-lg text-[#1E3A8A] dark:text-blue-400">₹2500+</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">7D Floor Mats</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Waterproof luxury mats</p>
                    </div>
                    <span className="font-black text-lg text-[#1E3A8A] dark:text-blue-400">₹1800</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">LED Lighting</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Headlights & ambient kits</p>
                    </div>
                    <span className="font-black text-lg text-[#1E3A8A] dark:text-blue-400">₹1200+</span>
                  </div>
                  <div className="flex justify-between items-center pb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Audio Systems</h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">Speakers & Android Players</p>
                    </div>
                    <span className="font-black text-lg text-[#1E3A8A] dark:text-blue-400">₹4500+</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white font-bold py-3 rounded text-sm transition-colors shadow-md">
                  VIEW CATALOG
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── LOYALTY CARD BANNER ─── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Black Banner Container */}
          <div className="bg-black rounded-2xl p-8 md:p-10 relative overflow-hidden flex flex-col md:flex-row shadow-2xl border border-gray-800">
            {/* Outline Glow (from screenshot) */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#FFB703]/30 pointer-events-none" />
            
            {/* Subtle background circles for depth */}
            <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-48 h-48 bg-gray-900 rounded-full blur-xl opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 right-10 transform -translate-y-1/2 w-48 h-48 bg-gray-900 rounded-full blur-xl opacity-50 pointer-events-none" />

            {/* Left Content */}
            <div className="w-full md:w-1/2 z-10 flex flex-col justify-center mb-10 md:mb-0">
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter mb-2 italic">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 block leading-[0.85] pb-1">MDK AUTO SPA</span>
                <span className="text-[#FFB703]">LOYALTY CARD</span>
              </h2>
              
              <div className="mt-4 text-white font-bold text-lg md:text-xl uppercase tracking-wide space-y-1">
                <p>GET <span className="text-red-500">50% OFF</span> ON 5<sup className="text-sm">TH</sup> WASH</p>
                <p>GET A <span className="text-[#FFB703]">FREE WASH</span> AFTER 6<sup className="text-sm">TH</sup> WASH</p>
              </div>

              <div className="mt-8">
                <Link href="/loyalty" className="inline-block bg-[#FFB703] hover:bg-yellow-400 text-black font-black uppercase text-sm px-8 py-3 rounded-full transition-transform transform hover:scale-105 shadow-[0_0_15px_rgba(255,183,3,0.4)]">
                  JOIN PROGRAM NOW
                </Link>
              </div>
            </div>

            {/* Right Content - Visual Tracker */}
            <div className="w-full md:w-[55%] z-10 flex items-center justify-center transform hover:scale-105 transition-all duration-500">
              <LoyaltyCard />
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER (Simple text for this page to match minimal main site styling) */}
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
