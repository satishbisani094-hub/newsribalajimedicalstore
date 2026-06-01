import React from "react";
import { motion } from "motion/react";
import { Phone, MapPin, MessageCircle, ShieldCheck, Award, FileText, CheckCircle } from "lucide-react";
import { STORE_INFO } from "../data";
import heroImg from "../assets/images/medical_store_hero_1780288630667.png";

interface HeroProps {
  onOpenUpload: () => void;
}

export default function Hero({ onOpenUpload }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const bannerHeight = document.getElementById("emergency-banner")?.offsetHeight || 0;
      const headerHeight = document.getElementById("main-header")?.offsetHeight || 0;
      const totalOffset = bannerHeight + headerHeight - 10;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - totalOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative bg-gradient-to-br from-blue-50/80 via-emerald-50/40 to-white pt-8 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Visual abstract circles background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[450px] h-[450px] rounded-full bg-emerald-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text items */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Pharmacy badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200/60 px-3.5 py-1.5 rounded-full text-emerald-800 text-xs font-bold tracking-wide uppercase shadow-2xs"
            >
              <Award className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
              <span>Chinna Mandem's Highly Rated Pharmacy</span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-none"
              >
                Your <span className="text-blue-600">Trusted</span> Healthcare Partner in{" "}
                <span className="text-emerald-600 block sm:inline">Chinna Mandem</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
              >
                Providing genuine medicines, premium healthcare items, and warm, quality advisory service for your family's lifelong well-being.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start"
            >
              <a
                id="hero-call-now-btn"
                href={`tel:${STORE_INFO.phone}`}
                className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold px-7 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all text-base cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              
              <a
                id="hero-directions-btn"
                href={STORE_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-white border-2 border-slate-200 hover:border-blue-600/60 hover:text-blue-700 text-slate-700 font-bold px-7 py-4 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all text-base cursor-pointer"
              >
                <MapPin className="h-5 w-5 text-red-500 animate-bounce" />
                Get Directions
              </a>

              <button
                id="hero-contact-us-btn"
                onClick={() => handleScrollTo("#contact")}
                className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-7 py-4 rounded-xl transition-all text-base cursor-pointer"
              >
                Contact Us
              </button>
            </motion.div>

            {/* Rx Quick CTA Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-5 bg-white border border-slate-150 rounded-2xl shadow-sm text-left max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Have a doctor's prescription?</h4>
                  <p className="text-xs text-slate-500 font-medium">Upload prescription to calculate costs & order delivery!</p>
                </div>
              </div>
              <button
                id="hero-quick-rx-upload-btn"
                onClick={onOpenUpload}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl cursor-pointer shadow-xs transition-colors shrink-0 w-full sm:w-auto text-center"
              >
                Submit Prescription
              </button>
            </motion.div>

            {/* Simple proof bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 pt-2 border-t border-slate-200/70"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-600">100% Genuine Meds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-600">Licensed Pharmacist</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-600">Home Delivery Available</span>
              </div>
            </motion.div>

          </div>

          {/* Hero interactive visual box */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16:10] lg:aspect-square flex items-center justify-center group"
            >
              <img
                src={heroImg}
                alt="New Sri Balaji Medical Store storefront visual banner"
                className="object-cover w-full h-full transform group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-slate-900/0 pointer-events-none" />
              
              {/* Dynamic Overlay Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-between border border-slate-100 shadow-lg">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-700">Official Storefront</p>
                  <p className="text-sm font-bold text-slate-800">Clean & Stocked Medicines Facility</p>
                </div>
                <div className="bg-slate-900 text-white rounded-lg px-2.5 py-1 text-center font-mono text-xs font-bold leading-none select-none">
                  LICENSED
                </div>
              </div>
            </motion.div>

            {/* floating absolute element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 -bottom-6 bg-white border border-slate-100 shadow-xl p-4 rounded-2xl hidden md:flex items-center gap-3 max-w-[220px]"
            >
              <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-850">Regulatory Checked</p>
                <p className="text-[10px] text-zinc-500 font-medium">Approved by AP Drug Board</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
