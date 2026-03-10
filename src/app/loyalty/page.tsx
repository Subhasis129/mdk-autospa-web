import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function LoyaltyPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#1A2340] to-[#0A0E1A] py-20 px-4 md:px-8 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFB703] opacity-5 blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Hero Text */}
          <div className="z-10">
            <h1 className="font-black text-5xl md:text-6xl uppercase leading-[1.1] tracking-tight mb-2">
              <span className="text-white">MDK </span>
              <span className="text-[#FFB703]">AUTO SPA</span>
              <br />
              <span className="text-[#4D8BFF]">LOYALTY PROGRAM</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mt-6 mb-10 leading-relaxed font-light">
              Join our exclusive rewards program. Get premium detailing, car washes, and accessories while earning free services.
            </p>
            
            {/* Input Group */}
            <div className="bg-white p-2 rounded-lg flex items-center shadow-xl w-full max-w-lg">
              <span className="material-icons text-gray-400 ml-3 mr-2">directions_car</span>
              <input 
                type="text" 
                placeholder="Enter Vehicle Number (e.g. OD-02...)" 
                className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-400 py-3 font-medium"
              />
              <button className="bg-[#4D8BFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-colors whitespace-nowrap hidden sm:block">
                Check Status
              </button>
            </div>
            <button className="bg-[#4D8BFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-colors w-full mt-2 sm:hidden shadow-md">
              Check Status
            </button>
          </div>

          {/* Right Hero Card */}
          <div className="z-10 flex justify-center lg:justify-end">
            <div className="bg-[#050505] rounded-2xl p-8 border border-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-[550px] relative overflow-hidden">
               {/* Subtle gradient inside card matching screenshot */}
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-30" />
               
               {/* Card Header */}
               <div className="flex justify-between items-start mb-8">
                 <div>
                   <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1 pl-1">VEHICLE NUMBER</p>
                   <div className="bg-white text-black font-bold py-1.5 px-3 rounded text-sm inline-block shadow-inner">
                     OD - XX - XXXX
                   </div>
                 </div>
                 <div className="w-8 h-8 bg-[#2D6A4F] rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(45,106,79,0.5)]">
                   <span className="material-icons text-white text-sm">directions_car</span>
                 </div>
               </div>

               {/* Title */}
               <h2 className="text-center font-black text-3xl mb-10 tracking-wider">
                 <span className="text-[#FFB703]">MDK LOYALTY CARD</span>
               </h2>

               {/* Stamps Grid */}
               <div className="flex flex-col gap-6 mb-12">
                 {/* Row 1: 5 stamps */}
                 <div className="flex justify-center gap-3 sm:gap-4 md:gap-5">
                   {[...Array(4)].map((_, i) => (
                     <div key={`r1-${i}`} className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] rounded-full border-[2.5px] border-[#4D8BFF] flex items-center justify-center" />
                   ))}
                   {/* 5th Stamp - 50% OFF */}
                   <div className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] rounded-full bg-white border-[3px] border-[#4D8BFF] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(77,139,255,0.4)] relative">
                     <span className="text-[#FFB703] font-black leading-none" style={{fontSize: "clamp(0.8rem, 3vw, 1.25rem)"}}>50%</span>
                     <span className="text-[#FFB703] font-black leading-none" style={{fontSize: "clamp(0.4rem, 1.5vw, 0.6rem)"}}>OFF</span>
                   </div>
                 </div>

                 {/* Row 2: 6 stamps */}
                 <div className="flex justify-center gap-3 sm:gap-4 md:gap-5">
                   {[...Array(5)].map((_, i) => (
                     <div key={`r2-${i}`} className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] rounded-full border-[2.5px] border-[#4D8BFF]" />
                   ))}
                   {/* 11th Stamp - FREE */}
                   <div className="w-[3.5rem] h-[3.5rem] sm:w-[4.5rem] sm:h-[4.5rem] rounded-full bg-transparent border-[3px] border-[#4D8BFF] flex items-center justify-center p-1 relative shadow-[0_0_20px_rgba(77,139,255,0.4)] transform hover:scale-105 transition-transform" style={{marginTop: "-0.25rem"}}>
                      <div className="w-full h-full bg-[#4D8BFF] rounded-full flex items-center justify-center opacity-90 shadow-inner">
                        <span className="text-[#FFB703] font-black text-xs sm:text-base tracking-wider drop-shadow-md">FREE</span>
                      </div>
                   </div>
                 </div>
               </div>

               {/* Card Footer Text */}
               <div className="text-center font-black uppercase text-white tracking-widest text-[0.65rem] sm:text-xs leading-relaxed space-y-1 drop-shadow-md">
                 <p>GET <span className="text-[#e63946]">50% OFF</span> ON YOUR 5<sup className="text-[0.5rem] sm:text-[0.6rem]">TH</sup> WASH</p>
                 <p>&amp; AFTER YOUR NEXT 5 WASHES, GET YOUR 6<sup className="text-[0.5rem] sm:text-[0.6rem]">TH</sup> WASH <span className="text-[#e63946]">FREE</span></p>
               </div>
               <p className="text-center text-gray-500 italic text-[0.6rem] mt-4 opacity-70">
                 * Loyalty rewards apply only to Car Wash services.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl uppercase tracking-wider text-gray-900 mb-2">HOW IT WORKS</h2>
            <div className="w-20 h-1 bg-[#FFB703] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EFF6FF] text-[#4D8BFF] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl">directions_car</span>
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-4 tracking-tight">1. Visit Us</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                Bring your car for any wash or detailing service at our Nayagarh location.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#EFF6FF] text-[#4D8BFF] rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl">qr_code_scanner</span>
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-4 tracking-tight">2. Get Stamped</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                Our team will digitally stamp your vehicle number in our system after every service.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#FFFBEB] text-[#FFB703] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons text-3xl">card_giftcard</span>
              </div>
              <h3 className="font-black text-xl text-gray-900 mb-4 tracking-tight">3. Redeem Rewards</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                Get <span className="text-[#FFB703] font-bold">50% OFF</span> on your 5th wash and a completely <span className="text-[#FFB703] font-bold">FREE WASH</span> on your 11th visit!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PREMIUM SERVICES SECTION */}
      <section className="py-12 bg-gradient-to-r from-[#1E3A8A] to-[#1e40af] text-white overflow-hidden relative" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%232563eb\\' fill-opacity=\\'0.2\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-6 md:gap-0">
             <h2 className="font-black text-3xl uppercase tracking-wider text-[#FFB703] drop-shadow-sm">OUR PREMIUM SERVICES</h2>
             
             {/* Contact Info */}
             <div className="text-right flex flex-col gap-2">
               <div className="flex items-center justify-end gap-2 text-xl font-bold">
                 <span className="material-icons text-[#FFB703]">phone</span>
                 <span>9090204893</span>
               </div>
               <div className="flex items-center justify-end gap-2 text-xl font-bold">
                 <span className="material-icons text-[#FFB703]">phone</span>
                 <span>8328907662</span>
               </div>
             </div>
          </div>

          {/* Service Pills Grid */}
          <div className="flex flex-wrap gap-3">
             <span className="bg-[#E63946] text-white text-xs font-black px-4 py-2 rounded uppercase tracking-wider shadow-sm">CAR WASHING &amp; DETAILING</span>
             <span className="bg-black text-white text-xs font-black px-4 py-2 rounded uppercase tracking-wider shadow-sm">CAR ACCESSORIES</span>
             <span className="bg-[#2D6A4F] text-white text-xs font-black px-4 py-2 rounded uppercase tracking-wider shadow-sm">PPF</span>
             <span className="bg-[#7209B7] text-white text-xs font-black px-4 py-2 rounded uppercase tracking-wider shadow-sm">RUBBING &amp; POLISHING</span>
             <span className="bg-[#B7094C] text-white text-xs font-black px-4 py-2 rounded uppercase tracking-wider shadow-sm">CERAMIC COATING</span>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-16 bg-[#F3F4F6] relative">
         <div className="max-w-3xl mx-auto px-4 absolute left-1/2 min-w-[320px] sm:min-w-[600px] transform -translate-x-1/2 -top-10 shadow-xl rounded-xl">
           <div className="bg-white rounded-xl py-6 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 border border-gray-100 items-baseline text-center sm:text-left">
             <span className="material-icons text-[#E63946] text-3xl bg-red-50 p-2 rounded-full">location_on</span>
             <div>
               <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">VISIT US AT</p>
               <p className="font-black text-sm sm:text-base text-gray-900 uppercase">NEW GHADUAL, NEAR PUSP RESTAURANT, NAYAGARH</p>
             </div>
           </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm md:text-base font-medium">
            © 2024 MDK Auto Spa &amp; Travels. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FFB703] hover:text-white transition-colors" aria-label="Facebook">
               {/* simple fb icon */}
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FFB703] hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.944 2.013 9.284 2 11.714 2h.601zm-.391 1.442h-.409c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
