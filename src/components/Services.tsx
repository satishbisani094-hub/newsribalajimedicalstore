import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Pill, 
  Stethoscope, 
  Activity, 
  Heart, 
  Sparkles, 
  ShieldAlert, 
  Droplet, 
  Truck, 
  ChevronDown, 
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { SERVICES, STORE_INFO } from "../data";
import { ServiceItem } from "../types";

// Dynamic mapper helper to map strings to Lucide icon components
const IconMapper = ({ iconName, className }: { iconName: string; className: string }) => {
  switch (iconName) {
    case "Pill":
      return <Pill className={className} />;
    case "Stethoscope":
      return <Stethoscope className={className} />;
    case "Activity":
      return <Activity className={className} />;
    case "Heart":
      return <Heart className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "ShieldAlert":
      return <ShieldAlert className={className} />;
    case "Droplet":
      return <Droplet className={className} />;
    case "Truck":
      return <Truck className={className} />;
    default:
      return <Pill className={className} />;
  }
};

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-base font-extrabold uppercase tracking-widest text-blue-600">
            Professional Pharmacy Services
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            Comprehensive Care Solutions Under One Roof
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-4" />
          <p className="text-base text-slate-500 font-medium pt-2">
            We operate with speed, scientific depth, and warm helpful guidance. Tap any card below to discover the benefits of our individual services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const isExpanded = activeServiceId === service.id;
            
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                layout
                whileHover={{ y: -6 }}
                onClick={() => handleCardClick(service.id)}
                className={`p-6 bg-white border rounded-2xl transition-all shadow-sm select-none cursor-pointer flex flex-col justify-between ${
                  isExpanded 
                    ? "border-emerald-500 ring-2 ring-emerald-100/50 scale-102" 
                    : "border-slate-150 hover:border-blue-300 hover:shadow-md"
                }`}
                transition={{ duration: 0.3 }}
              >
                <div>
                  {/* Icon & Badge Area */}
                  <div className="flex items-center justify-between pointer-events-none">
                    <div className={`p-3 rounded-xl ${
                      isExpanded 
                        ? "bg-emerald-600 text-white" 
                        : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                    }`}>
                      <IconMapper iconName={service.iconName} className="h-6 w-6" />
                    </div>
                    {service.id === "home-delivery" && (
                      <span className="bg-amber-100 text-amber-800 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm">
                        FREE IN VILLAGE
                      </span>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="mt-5 space-y-2 pointer-events-none">
                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                      {service.description}
                    </p>
                  </div>

                  {/* Expandable Benefits Block */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-5 border-t border-slate-100 pt-4 space-y-2.5 text-left"
                    >
                      <p className="text-[10px] uppercase tracking-wider font-extrabold text-blue-600">Key Advantages:</p>
                      <ul className="space-y-1.5 text-xs font-semibold text-slate-700">
                        {service.benefits.map((benefit, bIndex) => (
                          <li key={bIndex} className="flex items-center gap-1.5">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>

                {/* Card footer details action */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                  <span className="text-xs text-slate-400 font-bold">
                    {isExpanded ? "Click to collapse" : "Click for details"}
                  </span>
                  <div className={`h-7 w-7 rounded-full flex items-center justify-center transition-all ${
                    isExpanded ? "bg-emerald-50 text-emerald-700 transform rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Quick Help/Delivery Action Area */}
        <div className="mt-12 p-8 bg-slate-900 text-white rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle glow nodes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2.5 text-center lg:text-left">
            <span className="text-emerald-400 font-bold uppercase tracking-wider text-xs">COMMUNITY FIRST SERVICES</span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
              Need Regular Month-End Medications Deliveries?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-semibold max-w-xl">
              We help local diabetic, bp, and cardiac elders keep their prescriptions compiled. Send your details on WhatsApp once, and we will track your refills perfectly every month.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 mt-2 lg:mt-0 shrink-0 w-full sm:w-auto">
            <a
              id="services-whatsapp-action"
              href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20New%20Sri%20Balaji%20Medical%2520Store,%20I%20would%20like%20to%20register%20my%20parents%20or%20family%20for%20monthly%20refills.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors text-sm cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              Set Monthly Refills
            </a>
            <a
              id="services-call-action"
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-750 text-white font-bold py-3.5 px-6 rounded-xl border border-slate-700 transition-colors text-sm text-center cursor-pointer"
            >
              Ask refilling queries
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
