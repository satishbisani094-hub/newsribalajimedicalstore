import React from "react";
import { motion } from "motion/react";
import { Award, ShieldAlert, CheckCircle, Heart, HeartHandshake, UserCheck } from "lucide-react";
import { STORE_INFO } from "../data";

export default function AboutUs() {
  const commitments = [
    {
      title: "100% Genuine Medicines Sourcing",
      text: "We acquire medicines solely through direct pipelines from pharmaceutical company depots or highly verified stockists, preventing fake drugs."
    },
    {
      title: "Qualified Guidance",
      text: "Led by certified pharmacist B. Satish Kumar (B.Pharm). We analyze and confirm dosages, interaction risks, and administration instructions."
    },
    {
      title: "Empathetic Local Care",
      text: "We recognize every client is navigating a personal wellness journey. We listen with patience and resolve drug acquisition difficulties."
    },
    {
      title: "Fair Pricing & Accessibility",
      text: "Promotional focus means standard affordable rates with fair concessions on chronic life maintenance segment pills."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-base font-extrabold uppercase tracking-widest text-emerald-600">
            About Us
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight">
            Our Care Roots in the Chinna Manyam Community
          </p>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-base text-slate-500 font-medium pt-2">
            Established to provide a reliable, clean, certified standard of pharmacy access for rural and urban families of Chinna Manyam and broader Kadapa.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual block */}
          <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 rounded-3xl relative overflow-hidden shadow-xs">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl pointer-events-none" />
              
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                Our Foundation
              </span>
              
              <h3 className="text-2xl font-extrabold text-slate-900 mt-4 tracking-tight leading-snug">
                Your Healthiest Outcome is Our Singular Mission
              </h3>
              
              <p className="text-slate-600 text-sm mt-3 leading-relaxed font-medium">
                At <strong>New Sri Balaji Medical Store</strong>, we believe local healthcare is a sacred trust. Our home in Chinna Manyam, Kadapa, is designed to elevate pharmaceutical reliability. Far beyond simply dispensing pills, we exist to deliver relief, peace of mind, and accurate health awareness.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center border-t border-slate-200/60 pt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl border border-emerald-100">
                    <UserCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-extrabold">Registered Pharmacist</p>
                    <p className="text-sm font-bold text-slate-800">{STORE_INFO.owner}</p>
                  </div>
                </div>
                <div className="bg-zinc-100 px-3.5 py-2.5 rounded-xl text-center self-stretch sm:self-auto flex flex-col justify-center border border-zinc-200/50">
                  <p className="text-[9px] uppercase font-bold text-slate-500 tracking-wider">Drug Licensing AP</p>
                  <p className="text-xs font-mono font-bold text-slate-850 mt-0.5">{STORE_INFO.license.replace("Drug License No: ", "")}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-emerald-50/40 border border-emerald-100 rounded-2xl flex items-start gap-4">
              <HeartHandshake className="h-10 w-10 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-emerald-950 text-sm">Customer-First Health Standard</h4>
                <p className="text-xs text-emerald-850 font-medium leading-relaxed mt-0.5">
                  We verify each storage ambient temperature, trace clinical batch codes, and monitor expiration dates rigorously so you get nothing but 100% active, reliable medicines.
                </p>
              </div>
            </div>
          </div>

          {/* Commitments list */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm">✓</span>
              Our Uncompromising Standards
            </h3>
            
            <div className="space-y-4">
              {commitments.map((item, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100"
                >
                  <div className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-550 font-medium mt-1 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
