import React from "react";

export default function LoyaltyCard() {
  return (
    <div className="w-full max-w-4xl mx-auto select-none" style={{ containerType: 'inline-size' }}>
      <div className="w-full bg-gray-900 aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between border border-gray-800 rounded-[2cqi] overflow-hidden relative p-[4cqi]">
        
        {/* Top Section */}
        <div className="flex justify-between items-start w-full">
          
          {/* Left: Vehicle Number */}
          <div className="flex flex-col items-start pt-[1cqi]">
            <label className="text-white text-[1.8cqi] font-bold tracking-widest uppercase mb-[0.8cqi] whitespace-nowrap">
              VEHICLE NUMBER:
            </label>
            <input 
              type="text" 
              placeholder="" 
              className="bg-white text-black font-bold h-[4.5cqi] w-[24cqi] rounded-none px-[1.5cqi] text-[2.2cqi] outline-none uppercase"
            />
          </div>

          {/* Center: Title */}
          <div className="text-center flex flex-col items-center justify-start mt-[-1cqi]">
            <h2 className="font-display font-[900] text-[#4ea8e9] tracking-tighter uppercase leading-[0.8]" style={{ fontSize: '7.5cqi', transform: "scaleY(1.1)", transformOrigin: "bottom", textShadow: "0.2cqi 0.2cqi 0.4cqi rgba(0,0,0,0.5)" }}>
              MDK AUTOSPA
            </h2>
            <h2 className="font-display font-[900] text-[#f7ad3b] tracking-tighter uppercase leading-[0.8] mt-[1cqi]" style={{ fontSize: '7.5cqi', transform: "scaleY(1.1)", transformOrigin: "top", textShadow: "0.2cqi 0.2cqi 0.4cqi rgba(0,0,0,0.5)" }}>
              LOYALTY CARD
            </h2>
          </div>

          {/* Right: Logo Area */}
          <div className="flex flex-col items-center justify-start w-[24cqi]">
            <div className="w-[18cqi] relative flex justify-center drop-shadow-lg">
              <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Yellow bottom */}
                <path d="M30 35 Q 70 30 110 32 L 180 38 L 175 42 Q 110 36 35 40 Z" fill="#f7ad3b"/>
                {/* Blue top */}
                <path d="M40 30 Q 70 5 120 5 Q 160 5 180 20 L 195 30 L 190 35 L 180 32 Q 130 20 80 25 Q 60 27 20 35 L 10 30 Q 25 31 40 30 Z" fill="#4ea8e9"/>
                {/* Wheels */}
                <circle cx="50" cy="40" r="10" stroke="white" strokeWidth="2" fill="black"/>
                <circle cx="150" cy="40" r="10" stroke="white" strokeWidth="2" fill="black"/>
                <path d="M85 15 L 115 15 L 105 25 L 80 25 Z" fill="white" opacity="0.8"/>
                {/* Stars */}
                <path d="M20 5 L 25 10 M 25 5 L 20 10" stroke="#4ea8e9" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M180 10 L 185 15 M 185 10 L 180 15" stroke="#4ea8e9" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-white font-sans font-black text-[2.2cqi] tracking-wide leading-none mt-[0.5cqi] whitespace-nowrap">
              MaaDakhinakali
            </div>
            <div className="text-gray-400 font-sans font-bold text-[0.8cqi] tracking-[0.2em] uppercase mt-[0.3cqi] whitespace-nowrap">
              AUTOSPA AND TRAVELS
            </div>
          </div>
        </div>

        {/* Middle Section: Stamps (Honeycomb Layout) */}
        <div className="flex flex-col items-center justify-center gap-[2.5cqi] flex-grow mt-[2cqi]">
          {/* Row 1: 5 Circles */}
          <div className="flex gap-[2.5cqi] justify-center mr-[4cqi]">
            {[...Array(4)].map((_, i) => (
              <div key={`r1-${i}`} className="w-[12cqi] h-[12cqi] bg-white rounded-full border-[0.4cqi] border-[#4ea8e9] shrink-0 shadow-inner" />
            ))}
            <div className="w-[12cqi] h-[12cqi] bg-[#4ea8e9] rounded-full flex flex-col items-center justify-center shrink-0 shadow-inner relative border-[0.4cqi] border-[#4ea8e9]">
               <span className="text-[#f7ad3b] font-black leading-none text-[3.8cqi] tracking-tight drop-shadow-md">50%</span>
               <span className="text-[#f7ad3b] font-black leading-none text-[2.2cqi] tracking-wide mt-[0.2cqi] drop-shadow-md">OFF</span>
            </div>
          </div>

          {/* Row 2: 6 Circles */}
          <div className="flex gap-[2.5cqi] justify-center ml-[4cqi]">
            {[...Array(5)].map((_, i) => (
              <div key={`r2-${i}`} className="w-[12cqi] h-[12cqi] bg-white rounded-full border-[0.4cqi] border-[#4ea8e9] shrink-0 shadow-inner" />
            ))}
            <div className="w-[12cqi] h-[12cqi] bg-[#4ea8e9] rounded-full flex items-center justify-center shrink-0 shadow-inner relative border-[0.4cqi] border-[#4ea8e9]">
               <span className="text-[#f7ad3b] font-black leading-none text-[3.8cqi] tracking-wider drop-shadow-md">FREE</span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Footer Text */}
        <div className="text-center w-full font-sans pb-[1cqi]">
          <p className="font-bold text-white text-[2.3cqi] tracking-[0.05em] drop-shadow-md uppercase whitespace-nowrap">
            GET <span className="text-[#d93838]">50% OFF</span> ON 5<sup className="text-[1.5cqi]">TH</sup> WASH & GET A <span className="text-[#d93838]">FREE</span> WASH ON NEXT 6<sup className="text-[1.5cqi]">TH</sup> WASH
          </p>
        </div>

      </div>
    </div>
  );
}
