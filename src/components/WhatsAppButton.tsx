import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { STORE_INFO } from "../data";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a helpful tip 3.5 seconds after loading the website
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = `https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20New%20Sri%20Balaji%20Medical%20Store!%20I%20am%20inquiring%2520about%20the%20availability%20of%20certain%20medicines.`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 font-sans pointer-events-none">
      
      {/* Dynamic Pop Tips bubble */}
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700/60 text-white rounded-2xl p-3.5 pr-8 text-xs font-semibold shadow-2xl max-w-[260px] animate-bounce relative pointer-events-auto">
          <button
            id="close-wa-tooltip-btn"
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white p-0.5 rounded-full"
            title="Close help tips"
          >
            <X className="h-3 w-3" />
          </button>
          
          <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold uppercase text-[10px] tracking-wider mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>Store Online</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Need to check if a pill is in stock? Chat directly with B. Satish Kumar (B.Pharm Pharmacist) on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Green WhatsApp Button */}
      <a
        id="whatsapp-floating-trigger"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="h-14 w-14 bg-emerald-600 hover:bg-emerald-505 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all text-center relative pointer-events-auto"
        title="Check medicine availability on WhatsApp Chat"
      >
        <MessageCircle className="h-7 w-7 fill-white text-emerald-600" />
        
        {/* Pulsating green beacon dot */}
        <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border border-white"></span>
        </span>
      </a>

    </div>
  );
}
