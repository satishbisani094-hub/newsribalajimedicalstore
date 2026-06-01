import React from "react";
import { Phone, AlertTriangle, Truck } from "lucide-react";
import { STORE_INFO } from "../data";

export default function EmergencyBanner() {
  return (
    <div 
      id="emergency-banner"
      className="bg-red-600 text-white text-xs sm:text-sm py-2 px-4 flex flex-col sm:flex-row justify-between items-center gap-2 z-50 relative border-b border-red-700 font-sans shadow-sm"
    >
      <div className="flex items-center gap-2 text-center sm:text-left justify-center">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <AlertTriangle className="h-4 w-4 hidden sm:block shrink-0" />
        <span className="font-semibold tracking-wide">
          EMERGENCY SERVICE & PRESCRIPTIONS:
        </span>
        <span className="text-red-100 font-medium">
          Need urgent medicines in Chinna Manyam? We are here to support!
        </span>
      </div>
      <div className="flex items-center gap-4 shrink-0 font-medium">
        <a 
          href={`tel:${STORE_INFO.emergencyPhone}`} 
          className="flex items-center gap-1.5 bg-white text-red-700 px-3 py-1 rounded-full text-xs font-bold shadow-xs hover:bg-red-50 transition-colors pointer-events-auto"
        >
          <Phone className="h-3 w-3 animate-pulse" />
          Call Support: {STORE_INFO.emergencyPhone}
        </a>
        <div className="hidden md:flex items-center gap-1 text-red-100">
          <Truck className="h-4 w-4" />
          <span className="text-xs">Free Rural Area Drop-Off</span>
        </div>
      </div>
    </div>
  );
}
