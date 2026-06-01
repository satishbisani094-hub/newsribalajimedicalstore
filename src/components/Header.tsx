import React, { useState, useEffect } from "react";
import { Menu, X, Phone, ShieldCheck, Heart, Sparkles, MessageCircle, FileText } from "lucide-react";
import { STORE_INFO } from "../data";

interface HeaderProps {
  onOpenUpload: () => void;
}

export default function Header({ onOpenUpload }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Browse Products", href: "#products" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact & Location", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2.5 group"
            id="header-brand-logo"
          >
            <div className="bg-emerald-600 text-white p-2 rounded-xl shadow-md group-hover:bg-emerald-700 transition-colors flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-slate-800">
                  New Sri Balaji
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-sm">
                  Meds
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wider -mt-0.5">
                MEDICAL & GENERAL STORES
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-600 hover:after:w-full after:transition-all after:duration-350"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Call / Rx Buttons */}
          <div className="hidden sm:flex items-center gap-3.5">
            <button
              id="header-upload-btn-desktop"
              onClick={onOpenUpload}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all border border-slate-700 hover:shadow-md cursor-pointer"
            >
              <FileText className="h-4 w-4 text-emerald-400" />
              Upload Prescr.
            </button>
            <a
              id="header-whatsapp-btn-desktop"
              href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20New%20Sri%20Balaji%20Medical%20Store,%20I%20am%20inquiring%20about%20medicine%20availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Help
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="header-upload-btn-mobile-shortcut"
              onClick={onOpenUpload}
              className="sm:hidden bg-slate-800 hover:bg-slate-900 border border-slate-700 p-2 text-white rounded-lg flex items-center justify-center cursor-pointer"
              title="Upload prescription"
            >
              <FileText className="h-5 w-5 text-emerald-400" />
            </button>
            <button
              id="header-mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden"
        />
      )}

      {/* Mobile Drawer Body */}
      <div
        id="mobile-navigation-drawer"
        className={`fixed top-0 bottom-0 right-0 w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between border-b pb-4 mb-6">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              Balaji Medical
            </span>
            <button
              id="close-mobile-drawer-btn"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-base font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/50 px-4 py-2.5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3.5 border-t pt-6">
          <button
            id="header-upload-btn-mobile-drawer"
            onClick={() => {
              setIsOpen(false);
              onOpenUpload();
            }}
            className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <FileText className="h-5 w-5 text-emerald-400" />
            Upload Prescription
          </button>
          <a
            id="header-whatsapp-btn-mobile-drawer"
            href={`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hi%20New%20Sri%20Balaji%20Medical%20Store`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            <MessageCircle className="h-5 w-5" />
            Order on WhatsApp
          </a>
          <a
            id="header-call-btn-mobile-drawer"
            href={`tel:${STORE_INFO.phone}`}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-xl transition-colors text-center cursor-pointer"
          >
            <Phone className="h-5 w-5 text-emerald-600" />
            Call Store: {STORE_INFO.phone}
          </a>
          <p className="text-center text-[10px] text-slate-400">
            {STORE_INFO.license}
          </p>
        </div>
      </div>
    </header>
  );
}
