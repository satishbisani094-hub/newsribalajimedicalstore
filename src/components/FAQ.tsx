import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, FileText, Compass } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight pt-2">
            Answering Your Health Logistics Questions
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-base text-slate-500 font-medium pt-2">
            Have questions about ordering generic formulations, uploading prescriptions, or getting rural village drop-offs? Explore our detailed guidelines below.
          </p>
        </div>

        {/* FAQs Accordion Layout */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`bg-slate-50 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-blue-500 ring-2 ring-blue-50/50 bg-white shadow-xs" 
                    : "border-slate-150 hover:border-blue-200"
                }`}
              >
                {/* Header Toggle area */}
                <button
                  id={`faq-toggle-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 select-none focus:outline-hidden cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-lg shrink-0 ${
                      isOpen ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                    }`}>
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <span className="font-extrabold text-slate-850 text-sm sm:text-base tracking-tight leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-blue-50 text-blue-600" : "bg-slate-205 text-slate-400"
                  }`}>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </button>

                {/* Collapsible Answer Body with Framer Motion Layout */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                        {faq.answer}
                        <div className="mt-3.5 flex items-center gap-1.5 text-[10px] text-blue-600 uppercase font-extrabold tracking-widest pl-1 border-l border-blue-400">
                          <Compass className="h-3.5 w-3.5" />
                          <span>Category: {faq.category} Policy</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-14 max-w-xl mx-auto p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-100/60 rounded-3xl text-center space-y-4">
          <div className="inline-flex h-10 w-10 bg-emerald-100 rounded-full items-center justify-center text-emerald-600 font-bold">
            ?
          </div>
          <div className="space-y-1">
            <h4 className="font-extrabold text-slate-800 text-base">Still Have a Health Inquiry?</h4>
            <p className="text-xs text-slate-550 font-medium">
              We gladly answer questions about alternative substitutes, general dosage guidelines, or pricing catalogs directly on chat.
            </p>
          </div>
          <a
            id="faq-whatsapp-ask-btn"
            href="https://wa.me/+919494328351?text=Hi%20New%20Sri%20Balaji%20Medical%20Store!%20I%20have%20a%20question..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs py-2.5 px-6 rounded-xl cursor-pointer"
          >
            Ask Us Directly
          </a>
        </div>

      </div>
    </section>
  );
}
