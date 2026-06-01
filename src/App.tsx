/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import EmergencyBanner from "./components/EmergencyBanner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import PrescriptionUploadModal from "./components/PrescriptionUploadModal";

export default function App() {
  const [prescriptionOpen, setPrescriptionOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-emerald-600 selection:text-white">
      {/* Critical Emergency support alert scroll at top level */}
      <EmergencyBanner />

      {/* Navigation header with anchor triggers & rx state */}
      <Header onOpenUpload={() => setPrescriptionOpen(true)} />

      {/* Main page layout */}
      <main className="flex-1">
        {/* Dynamic hero landing */}
        <Hero onOpenUpload={() => setPrescriptionOpen(true)} />

        {/* Corporate story */}
        <AboutUs />

        {/* Dynamic expanded services matrices */}
        <Services />

        {/* High trust signals */}
        <WhyChooseUs />

        {/* Interactive medicine catalog browser with check-out simulation */}
        <Products />

        {/* Community feedback and star scores */}
        <Reviews />

        {/* Dynamic FAQ accordions list */}
        <FAQ />

        {/* Location cards, map embeds and inquiry triggers */}
        <Contact />
      </main>

      {/* Standard brand footer and maps navigation jumps */}
      <Footer />

      {/* Floating immediate WhatsApp advisory support helper */}
      <WhatsAppButton />

      {/* Simulated check-up & file-upload prescription handler */}
      {prescriptionOpen && (
        <PrescriptionUploadModal onClose={() => setPrescriptionOpen(false)} />
      )}
    </div>
  );
}
