import React, { useState } from "react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Mail, 
  Send, 
  HeartHandshake, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";
import { STORE_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Medicine Availability",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    
    // Create WhatsApp text if user wants to send on WhatsApp too
    const waText = `Hi New Sri Balaji Medical Store! I am sending an inquiry from your website:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    const waUrl = `https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waText)}`;
    
    // Simulate internal storage/submission setting
    setSubmitted(true);
    
    // Prompt the user to redirect to WhatsApp for immediate active reply
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Contact & Store Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight pt-2">
            Visit Our Store or Send a Message
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-4" />
          <p className="text-base text-slate-500 font-medium pt-2">
            We are centrally located in Chinna Manyam. Need directions, have wholesale medicine bulk lists, or want to call us for availability? We are ready.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info Card & Google Maps Embed */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quick Contacts Block */}
            <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-6 relative overflow-hidden">
              {/* decorative absolute nodes */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-600/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">PHYSICAL ADDRESS</span>
                <div className="flex gap-3">
                  <MapPin className="h-6 w-6 text-red-500 shrink-0 mt-0.5 animate-bounce" />
                  <div>
                    <h4 className="font-extrabold text-sm sm:text-base leading-snug">{STORE_INFO.name}</h4>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed mt-1">
                      {STORE_INFO.address}
                    </p>
                  </div>
                </div>
                <a 
                  id="contact-maps-direct-btn"
                  href={STORE_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold text-xs py-2 px-4 rounded-xl transition-colors border border-white/10"
                >
                  Configure Routes in Google Maps ↗
                </a>
              </div>

              {/* Working Hours & Call info */}
              <div className="space-y-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">STORE TIMINGS & HOURS</span>
                  <div className="flex gap-3 mt-2">
                    <Clock className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-300 leading-relaxed font-semibold">
                      <p>Mon - Sat: {STORE_INFO.businessHours.weekdays}</p>
                      <p>Sunday: {STORE_INFO.businessHours.sunday}</p>
                      <p className="text-emerald-400 font-bold mt-1">💊 {STORE_INFO.businessHours.emergency}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[10px] text-slate-450 uppercase font-extrabold tracking-wider">LICENSE CREDENTIAL</p>
                  <p className="text-[11px] font-mono font-semibold text-slate-300">{STORE_INFO.license}</p>
                </div>
              </div>
            </div>

            {/* Google Maps iFrame */}
            <div className="bg-white border border-slate-150 p-3 rounded-3xl shadow-xs aspect-video sm:aspect-none sm:h-[360px] overflow-hidden flex flex-col justify-between">
              <iframe
                id="contact-google-maps-iframe"
                src="https://maps.google.com/maps?q=Chinna%20Manyam,%20Kadapa%20District,%20Andhra%20Pradesh,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl grayscale-10 hover:grayscale-0 transition-all h-[92%] w-full"
                title="New Sri Balaji Medical Store Location Google Map"
              />
              <div className="flex items-center justify-between px-2 pt-2 text-[10px] text-zinc-500 font-semibold select-none">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Verified Map Coordinate Point
                </span>
                <span>Kadapa District Route Highway</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Contact / Inquiry Form */}
          <div className="lg:col-span-5 bg-white border border-slate-150 p-6 sm:p-8 rounded-3xl shadow-xs space-y-6 flex flex-col justify-between">
            
            <div className="space-y-2">
              <h3 className="text-xl font-black text-slate-850 tracking-tight flex items-center gap-2">
                <HeartHandshake className="h-5.5 w-5.5 text-emerald-600 shrink-0" />
                Quick Health Inquiry
              </h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">
                Fill this short card to inquire about bulk health products or checking alternative stock. Submitting will instantly compile your message and redirect to WhatsApp for speedy chat!
              </p>
            </div>

            {submitted ? (
              /* Success Submission Block */
              <div className="py-12 text-center bg-emerald-50 border border-emerald-100 rounded-2xl p-6 space-y-4">
                <div className="h-12 w-12 bg-emerald-120 text-emerald-800 rounded-full mx-auto flex items-center justify-center font-black animate-bounce shadow-3xs">
                  ✓
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-emerald-950 text-base">Inquiry Compiled Perfectly!</h4>
                  <p className="text-emerald-850 text-xs font-semibold leading-relaxed max-w-xs mx-auto">
                    We are now opening WhatsApp to deliver your inquiry securely to B. Satish Kumar (Pharmacist). Please check the active chat window!
                  </p>
                </div>
                <div className="text-[10px] text-emerald-700 font-mono animate-pulse font-bold bg-white inline-block px-3 py-1 rounded-sm">
                  Redirecting to WhatsApp chat...
                </div>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-form-name" className="text-xs font-extrabold text-slate-650 uppercase">
                    Your Name
                  </label>
                  <input
                    id="contact-form-name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-hidden focus:border-blue-500 transition-all font-sans"
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-form-phone" className="text-xs font-extrabold text-slate-650 uppercase">
                    Your Phone / WhatsApp Number
                  </label>
                  <input
                    id="contact-form-phone"
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-hidden focus:border-blue-500 transition-all font-sans"
                  />
                </div>

                {/* Subject dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-form-subject" className="text-xs font-extrabold text-slate-650 uppercase">
                    Select Subject Area
                  </label>
                  <select
                    id="contact-form-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-bold rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-hidden focus:border-blue-500 transition-all font-sans"
                  >
                    <option value="Medicine Availability">Medicine Stock Availability</option>
                    <option value="Home Delivery request">Doorstep Delivery Request</option>
                    <option value="Chronic dosage refill">Chronic Dosage refilling</option>
                    <option value="Surgical / First Aid kit">Surgical dressings bundle</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Message text */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-form-message" className="text-xs font-extrabold text-slate-650 uppercase">
                    Write Medication/Inquiry Details
                  </label>
                  <textarea
                    id="contact-form-message"
                    required
                    rows={4}
                    placeholder="List the tablet names, syrups, or general items you require..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm font-semibold rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-hidden focus:border-blue-500 transition-all font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all text-sm cursor-pointer"
                >
                  <Send className="h-4.5 w-4.5" />
                  Submit & Open WhatsApp
                </button>
              </form>
            )}

            {/* Quick manual communication badges */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-around gap-2 text-center text-slate-400 select-none">
              <a 
                id="contact-bottom-phone-badge"
                href={`tel:${STORE_INFO.phone}`} 
                className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-650 hover:text-blue-600 transition-colors"
              >
                <div className="bg-slate-50 p-2 rounded-full border border-slate-150">
                  <Phone className="h-4 w-4 text-blue-600" />
                </div>
                <span>Call Store</span>
              </a>
              <a 
                id="contact-bottom-wa-badge"
                href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}`} 
                className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-650 hover:text-emerald-600 transition-colors"
              >
                <div className="bg-slate-50 p-2 rounded-full border border-slate-150">
                  <MessageCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <span>Direct WhatsApp</span>
              </a>
              <a 
                id="contact-bottom-email-badge"
                href={`mailto:${STORE_INFO.email}`} 
                className="flex flex-col items-center gap-1 text-[11px] font-bold text-slate-650 hover:text-red-500 transition-colors"
              >
                <div className="bg-slate-50 p-2 rounded-full border border-slate-150">
                  <Mail className="h-4 w-4 text-red-550" />
                </div>
                <span>Email Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
