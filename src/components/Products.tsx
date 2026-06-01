import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MessageCircle, Star, Sparkles, Filter, X, HelpCircle, CornerDownRight } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, STORE_INFO } from "../data";
import { ProductItem } from "../types";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter products by category and search text
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = 
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoriesWithAll = useMemo(() => {
    return ["All", ...PRODUCT_CATEGORIES];
  }, []);

  const getWhatsAppInquiryUrl = (product: ProductItem) => {
    const text = `Hello New Sri Balaji Medical Store! I saw this product on your brochure website and would like to inquire about its brand availability, stock, or exact price:\n\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Est. Price:* ${product.priceEstimate || "Inquire in shop"}\n\nCan you confirm if this is in stock today? Thanks!`;
    return `https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-sky-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Medicine & Wellness Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-slate-900 tracking-tight pt-2">
            Explore Our Genuine Medicines & Brands
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-4" />
          <p className="text-base text-slate-500 font-medium pt-2">
            Browse our wide selection of certified therapeutic segments, pediatric baby care fluids, diabetic testing systems, and emergency first-aid bandages.
          </p>
        </div>

        {/* Dynamic Search and Category Controller */}
        <div className="bg-white border border-slate-150 p-5 rounded-3xl shadow-xs space-y-5 mb-10 max-w-4xl mx-auto">
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                id="product-dir-search-input"
                type="text"
                placeholder="Search Paracetamol, BP diagnostic monitor, Baby lotion..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-medium text-sm focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all shadow-3xs"
              />
              {searchQuery && (
                <button
                  id="product-search-clear-btn"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650 p-1 rounded-full hover:bg-slate-200/60"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filter Reset */}
            {(selectedCategory !== "All" || searchQuery) && (
              <button
                id="reset-product-filters-btn"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 py-3.5 px-5 rounded-2xl transition-colors min-w-max shrink-0 cursor-pointer"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Scrolling Category Pills */}
          <div className="space-y-2">
            <p className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 flex items-center gap-1">
              <Filter className="h-3.5 w-3.5 text-blue-500" />
              Select Pharmacy Category:
            </p>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2 mask-linear">
              {categoriesWithAll.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`cat-pill-${cat.replace(/\s+/g, "-")}`}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold leading-none shrink-0 transition-all cursor-pointer ${
                      isActive
                        ? "bg-blue-600 border-2 border-blue-600 text-white shadow-sm"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border-2 border-slate-200/50"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Catalog Results Grid */}
        <div className="relative">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    id={`product-card-${product.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white border border-slate-150 hover:border-blue-300 rounded-3xl p-5 flex flex-col justify-between hover:shadow-lg transition-all group"
                  >
                    <div>
                      {/* Product Card Badges */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-sm">
                          {product.category}
                        </span>
                        {product.badge ? (
                          <span className="bg-amber-100 text-amber-800 text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-sm flex items-center gap-0.5 shadow-3xs">
                            <Sparkles className="h-2.5 w-2.5 text-amber-600" />
                            {product.badge}
                          </span>
                        ) : product.isPopular ? (
                          <span className="bg-emerald-50 text-emerald-800 text-[9px] font-extrabold px-2 py-0.5 rounded-sm flex items-center gap-0.5">
                            <Star className="h-2.5 w-2.5 text-emerald-600 fill-emerald-500" />
                            Popular
                          </span>
                        ) : null}
                      </div>

                      {/* Info Area */}
                      <div className="space-y-1 pb-4">
                        <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-700 transition-colors tracking-tight line-clamp-1">
                          {product.name}
                        </h3>
                        {product.dosage && (
                          <p className="text-[11px] text-emerald-700 font-bold bg-emerald-50/60 inline-block px-1.5 py-0.5 rounded-xs">
                            {product.dosage}
                          </p>
                        )}
                        <p className="text-xs text-slate-500 leading-relaxed font-semibold line-clamp-2 pt-1.5">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    {/* Price & Action Area */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
                      <div className="flex items-baseline justify-between select-none">
                        <span className="text-[10px] text-slate-400 font-extrabold uppercase">Estimated Price</span>
                        <span className="text-sm font-black text-slate-800 font-mono">
                          {product.priceEstimate}
                        </span>
                      </div>

                      {/* WhatsApp Inquiry CTA */}
                      <a
                        id={`product-inquire-btn-${product.id}`}
                        href={getWhatsAppInquiryUrl(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-xs hover:shadow-md cursor-pointer"
                        title="Check brand availability and obtain exact pricing"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Inquire Stock & Cost
                      </a>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* No Results State */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 bg-slate-50 border border-dashed rounded-3xl border-slate-200 max-w-xl mx-auto space-y-4 shadow-3xs"
              >
                <HelpCircle className="h-12 w-12 text-slate-300 mx-auto" />
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-800 text-lg">No Matching Items Found</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-semibold max-w-sm mx-auto p-1.5">
                    We might still carry this in our physical store! Click button below to send your prescription directly to our pharmacist.
                  </p>
                </div>
                <button
                  id="not-found-whatsapp-btn"
                  onClick={() => {
                    const text = `Hi New Sri Balaji Medical Store! I searched for "${searchQuery}" on your catalog, but couldn't find it. Can you confirm if you carry this medicine/supplement?`;
                    window.open(`https://wa.me/${STORE_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                  className="bg-slate-850 hover:bg-slate-900 text-white text-xs font-bold py-2.5 px-5 rounded-xl cursor-pointer"
                >
                  Direct WhatsApp Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Interactive informational note about prices */}
        <div className="mt-8 flex items-start gap-2.5 max-w-3xl mx-auto p-4 bg-blue-100/30 border border-blue-100/50 rounded-2xl text-slate-500 text-[11px] font-semibold leading-relaxed">
          <CornerDownRight className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong>Note on Pharmaceutical Regulations & Cost Estimates:</strong> Rates and pricing estimates declared above are calculated based on average regional pricing across major ethical brands (Mankind, Abbott, Intas, Alkem, etc.). Valid prescriptions are legally mandatorily checked before we dispense any Schedule H or Schedule X drug therapies. We proudly support generic substitutions where requested by patient.
          </p>
        </div>

      </div>
    </section>
  );
}
