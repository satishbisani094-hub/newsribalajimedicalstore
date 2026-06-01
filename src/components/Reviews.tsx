import React from "react";
import { motion } from "motion/react";
import { Star, MessageCircle, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { REVIEWS, STORE_INFO } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Visual background decorative element */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Rating Scorecard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-8 text-center lg:text-left space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">
              Verified Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight pt-2">
              What the Chinna Manyam Community Says About Us
            </h2>
            <p className="text-base text-slate-500 font-medium max-w-2xl">
              We strive to earn your trust with every medicine box. Here is the feedback from our valued walk-in patients and monthly chronic therapy clients.
            </p>
          </div>

          {/* Quick Scorecard Card */}
          <div className="lg:col-span-4 bg-white border border-slate-150 p-6 rounded-3xl flex items-center justify-between shadow-xs max-w-md mx-auto w-full">
            <div>
              <p className="text-[11px] uppercase font-bold tracking-wider text-slate-400">Average Rating</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-black text-slate-850">4.9</span>
                <span className="text-sm text-slate-400">/ 5.0</span>
              </div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </div>
            <div className="border-l border-slate-100 pl-6 space-y-1">
              <p className="text-xs font-bold text-slate-800">120+ Families</p>
              <p className="text-[10px] text-zinc-500 font-medium leading-none">Locally Consulted</p>
              <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded-xs mt-1.5">
                <CheckCircle2 className="h-3 w-3 shrink-0" />
                <span>100% Genuine Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              id={`review-card-${review.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-6 sm:p-8 bg-white border border-slate-150 rounded-3xl relative hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Quote marks aesthetic background decoration */}
              <Quote className="h-10 w-10 text-slate-100 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* 5 Stars Rating indicators */}
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-semibold italic">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Meta Area */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-slate-850 text-sm sm:text-base">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[11px] text-slate-500 font-medium">
                      {review.role}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-1 rounded-xs">
                      {review.location}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono font-medium shrink-0">
                  {review.date}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA to write a review or feedback */}
        <div className="mt-14 max-w-xl mx-auto p-5 bg-white border border-slate-150 rounded-2xl shadow-xs text-center space-y-3">
          <p className="text-xs text-slate-500 font-bold">Bought medicines from us and happy with B. Satish Kumar's advisory?</p>
          <a
            id="review-write-whatsapp-btn"
            href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20New%20Sri%20Balaji%2520Medical%20Store!%20I%20would%20like%20to%20send%20a%20testimonial.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 px-5 rounded-xl transition-colors cursor-pointer"
          >
            <MessageCircle className="h-4.5 w-4.5 text-emerald-600" />
            Send Us Feedback on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
