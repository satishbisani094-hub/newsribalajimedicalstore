import React from "react";
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Heart } from "lucide-react";
import { STORE_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const bannerHeight = document.getElementById("emergency-banner")?.offsetHeight || 0;
      const headerHeight = document.getElementById("main-header")?.offsetHeight || 0;
      const totalOffset = bannerHeight + headerHeight - 10;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - totalOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 font-sans border-t border-slate-800">
      
      {/* Top Banner section: Quick trust signals */}
      <div className="border-b border-slate-800 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center justify-between">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="bg-emerald-500/10 p-2.5 rounded-full text-emerald-400">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-extrabold tracking-tight">100% Licensed Outlet</h4>
                <p className="text-[10px] text-slate-500">AP Drug license board accredited</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="bg-blue-500/10 p-2.5 rounded-full text-blue-400">
                <MapPin className="h-5.5 w-5.5 animate-pulse" />
              </div>
              <div>
                <h4 className="text-white text-sm font-extrabold tracking-tight">Chinna Mandem Main Road</h4>
                <p className="text-[10px] text-slate-500">Accessible local parking</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="bg-amber-500/10 p-2.5 rounded-full text-amber-400">
                <Heart className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="text-white text-sm font-extrabold tracking-tight">Generics substitution option</h4>
                <p className="text-[10px] text-slate-500">Fair healthcare economy options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & meta info */}
          <div className="md:col-span-5 space-y-5">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="bg-emerald-600 text-white p-2 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-sans font-bold text-lg text-white tracking-tight">
                  New Sri Balaji Medical Store
                </span>
                <p className="text-[9px] text-slate-500 font-extrabold tracking-wider -mt-0.5">
                  DELIVERING GENUINE MEDICAL RELIEF
                </p>
              </div>
            </a>
            
            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
              We operate as a trustworthy healthcare partner in Chinna Mandem, AP. Our catalog includes genuine tablets, liquid formulations, specialty diabetic care, orthopedic supports, first-aid wraps, and baby wellness needs.
            </p>

            <div className="text-xs text-slate-500 font-mono space-y-1">
              <p>{STORE_INFO.license}</p>
              <p>Pharmacist Owner: {STORE_INFO.owner}</p>
            </div>
          </div>

          {/* Quick jump navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs font-bold">
              <a 
                href="#home" 
                onClick={(e) => handleLinkClick(e, "#home")}
                className="hover:text-emerald-450 transition-colors"
              >
                Top Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleLinkClick(e, "#about")}
                className="hover:text-emerald-450 transition-colors"
              >
                Our Story (About)
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleLinkClick(e, "#services")}
                className="hover:text-emerald-450 transition-colors"
              >
                Core Services
              </a>
              <a 
                href="#products" 
                onClick={(e) => handleLinkClick(e, "#products")}
                className="hover:text-emerald-450 transition-colors"
              >
                Browse Products
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="hover:text-emerald-450 transition-colors"
              >
                Store Location Map
              </a>
            </div>
          </div>

          {/* Direct channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-black uppercase tracking-wider">Direct Channels</h4>
            <div className="space-y-3.5 text-xs font-semibold text-slate-400">
              <div className="flex gap-2.5 items-start">
                <MapPin className="h-4.5 w-4.5 text-red-500 shrink-0 mt-0.5" />
                <span>{STORE_INFO.address}</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Phone className="h-4.5 w-4.5 text-blue-400 shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-white transition-colors">
                  {STORE_INFO.phone}
                </a>
              </div>
              <div className="flex gap-2.5 items-center">
                <Mail className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-white transition-colors">
                  {STORE_INFO.email}
                </a>
              </div>
            </div>

            {/* external directions anchor buttons and widgets */}
            <div className="pt-2">
              <a 
                id="footer-maps-btn"
                href={STORE_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-750 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl border border-slate-700 transition"
              >
                Open Google Maps Routing
                <ExternalLink className="h-3 w-3 text-slate-400" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Sub footer layout */}
      <div className="border-t border-slate-800/80 bg-slate-950/80 py-6 text-center text-[11px] font-medium text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} New Sri Balaji Medical Store, Chinna Mandem. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Providing genuine regional health access. Certified B.Pharm Pharmacist.</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
