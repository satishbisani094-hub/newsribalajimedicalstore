import React from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  BadgeIndianRupee, 
  ShieldCheck, 
  Smile, 
  Layers, 
  Clock, 
  Users,
  Award
} from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

const IconMapper = ({ iconName, className }: { iconName: string; className: string }) => {
  switch (iconName) {
    case "CheckCircle2":
      return <CheckCircle2 className={className} />;
    case "BadgeIndianRupee":
      return <BadgeIndianRupee className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Smile":
      return <Smile className={className} />;
    case "Layers":
      return <Layers className={className} />;
    case "Clock":
      return <Clock className={className} />;
    case "Users":
      return <Users className={className} />;
    default:
      return <CheckCircle2 className={className} />;
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient blur nodes to elevate page vibe */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">
            Why Our Clients Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight pt-2">
            Delivering Reliable Care with Integrity
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-base text-slate-500 font-medium pt-2">
            We hold ourselves to strict standards. Discover how our commitments work together to support the well-being of families and farms in Chinna Manyam.
          </p>
        </div>

        {/* Bento/Flexible Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {/* Main Trust Highlight Card (Large Span) */}
          <div className="p-8 bg-gradient-to-br from-blue-600 to-emerald-600 text-white rounded-3xl flex flex-col justify-between shadow-lg md:col-span-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <Award className="h-12 w-12 text-emerald-300" />
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                Your Health Is In Certified Hands
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-semibold">
                New Sri Balaji Medical Store is more than a commercial shop — it is a pillar of health trust. Every prescription, syrup, and supplement on our shelves passes a meticulous temperature storage validation and expiration checklist.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
              <div>
                <p className="text-xs text-emerald-100 font-bold uppercase tracking-wider">Regulatory Compliance</p>
                <p className="text-slate-100 text-xs font-mono font-bold mt-0.5">AP Drug Board Certified</p>
              </div>
              <span className="bg-white/20 text-white text-[11px] font-bold tracking-widest px-2.5 py-1 rounded-sm uppercase">
                Licensed
              </span>
            </div>
          </div>

          {/* Map details onto dynamic cards */}
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              id={`choose-card-${item.id}`}
              className="p-6 bg-slate-50 border border-slate-150 hover:border-emerald-350 hover:bg-white rounded-3xl transition-all shadow-2xs hover:shadow-md group"
            >
              <div className="bg-white border border-slate-100 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-blue-600 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-transparent transition-all shadow-3xs">
                <IconMapper iconName={item.iconName} className="h-6 w-6" />
              </div>
              
              <h3 className="font-extrabold text-slate-900 mt-5 text-base sm:text-lg tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-semibold">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
