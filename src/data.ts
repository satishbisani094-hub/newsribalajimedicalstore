import { ServiceItem, ProductItem, ReviewItem, FAQItem } from "./types";

export const STORE_INFO = {
  name: "New Sri Balaji Medical Store",
  tagline: "Your Trusted Healthcare Partner in Chinna Manyam",
  owner: "B. Satish Kumar (B.Pharm)",
  license: "Drug License No: AP/KDP/2023-89472",
  address: "Main Road, Chinna Manyam, Kadapa District, Andhra Pradesh - 516269, India",
  googleMapsLink: "https://maps.google.com/?q=Chinna+Manyam+Kadapa+Andhra+Pradesh",
  phone: "+91 94943 28351",
  whatsapp: "+91 94943 28351",
  email: "sribalajimedical2026@gmail.com",
  emergencyPhone: "+91 93465 52839",
  businessHours: {
    weekdays: "8:00 AM - 10:00 PM",
    sunday: "8:00 AM - 9:00 PM",
    emergency: "24/7 Available on Phone"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "presc-medicines",
    title: "Prescription Medicines",
    description: "Dispensing authentic, high-quality prescription pharmaceutical formulations sourced directly from certified manufacturers.",
    iconName: "Pill",
    benefits: ["100% Genuine Medicines", "Batch & Expiry Checked", "Pharmacist Consultation Available", "Generic & Branded Options"]
  },
  {
    id: "otc-medicines",
    title: "Over-the-Counter Medicines",
    description: "Wide range of OTC medications for common ailments, cold, cough, pain relief, and seasonal allergies with professional guidance.",
    iconName: "Stethoscope",
    benefits: ["Daily Ailment Treatment", "Trusted OTC Brands", "Safe Dosage Instructions", "Instant Availability"]
  },
  {
    id: "health-supplements",
    title: "Health Supplements",
    description: "Vitamins, minerals, protein drinks, and wellness supplements to support your active lifestyle and everyday vitality.",
    iconName: "Activity",
    benefits: ["Multivitamins & Minerals", "Nutritional Drinks", "Immunity Boosters", "Calcium & Bone Supplements"]
  },
  {
    id: "baby-care",
    title: "Baby Care Products",
    description: "Premium baby foods, gentle skin lotions, diapers, wipes, and pediatric hygiene essentials for your little one's safe health limit.",
    iconName: "Heart",
    benefits: ["Pediatrician-Trusted Brands", "Gentle, Hypoallergenic Formula", "Diapers & Baby Food Range", "Complete Pediatric Hygiene"]
  },
  {
    id: "personal-care",
    title: "Personal Care Products",
    description: "Skincare, dental hygiene, hair care, and professional grooming products suitable for all age groups and skin types.",
    iconName: "Sparkles",
    benefits: ["Dermatologically Cleared Brands", "Daily Wellness Hygiene", "Oral Care & Hair Care Essentials", "Organic & Herbal Options"]
  },
  {
    id: "first-aid",
    title: "First Aid Supplies",
    description: "All critical medical dressings, bandages, antiseptics, and surgical cotton always in stock for emergency situations.",
    iconName: "ShieldAlert",
    benefits: ["Surgical Dressings & Bandages", "Antiseptic Fluids", "Burn Treatments", "Compact Home Kits Available"]
  },
  {
    id: "diabetic-supplies",
    title: "Diabetic & Specialty Care",
    description: "Specialized monitoring systems, test strips, therapeutic products, and specific sugar-free supplements for chronic care.",
    iconName: "Droplet",
    benefits: ["Glucose Monitoring Systems", "Test Strips & Lancets", "Insulin Cooling Bags", "Sugar-Free Health Drinks"]
  },
  {
    id: "home-delivery",
    title: "Home Delivery Service",
    description: "Convenient doorstep delivery of all your essential medicines for residents within Chinna Manyam and neighboring villages.",
    iconName: "Truck",
    benefits: ["Doorstep Medication Dropoff", "Easy WhatsApp Prescription Upload", "Contactless Cash On Delivery", "Timely Urgent Deliveries"]
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "genuine-meds",
    title: "Genuine Medicines",
    description: "We source entirely from licensed pharma distributors, ensuring absolute authenticity, clean storage, and active cold-chain maintenance.",
    iconName: "CheckCircle2"
  },
  {
    id: "affordable-prices",
    title: "Affordable Prices",
    description: "Maximum retail discount on major lifesavers with a dedicated option for high-quality, high-value generic compositions.",
    iconName: "BadgeIndianRupee"
  },
  {
    id: "experienced-staff",
    title: "Experienced Staff",
    description: "Staffed by highly knowledgeable, patient-oriented personnel who understand prescriptions and offer precise drug advice.",
    iconName: "ShieldCheck"
  },
  {
    id: "friendly-service",
    title: "Friendly Customer Service",
    description: "Empathy, care, and respectful attention is in our DNA. We take the time to explain instructions and review dosage questions.",
    iconName: "Smile"
  },
  {
    id: "wide-availability",
    title: "Wide Product Availability",
    description: "Vast inventory across multi-specialty therapeutics, chronic segments, acute pain, baby care, and daily wellness items.",
    iconName: "Layers"
  },
  {
    id: "quick-service",
    title: "Quick Service",
    description: "Zero long queues. Our fast verification, digital billing, and smart filing ensure your prescription is delivered with speed.",
    iconName: "Clock"
  },
  {
    id: "trusted-community",
    title: "Trusted by Local Community",
    description: "Proudly serving local families, seniors, and agricultural workers of Chinna Manyam and Kadapa rural areas with stellar dedication.",
    iconName: "Users"
  }
];

export const PRODUCT_CATEGORIES = [
  "Tablets & Capsules",
  "Syrups",
  "Health Supplements",
  "Baby Care",
  "Diabetic Care",
  "Personal Hygiene",
  "Medical Equipment",
  "First Aid Essentials"
];

export const PRODUCTS: ProductItem[] = [
  // Tablets & Capsules
  {
    id: "p1",
    name: "Paracetamol 650mg Tablets",
    category: "Tablets & Capsules",
    description: "Quality pain management and fever reduction formulation.",
    dosage: "650mg strength",
    priceEstimate: "₹25 - ₹35 per strip",
    badge: "Bestseller",
    isPopular: true
  },
  {
    id: "p2",
    name: "Pantoprazole Gastro-Resistant Tablets",
    category: "Tablets & Capsules",
    description: "Effective 40mg formulation for acidity, GERD, and stomach relief.",
    dosage: "40mg strength",
    priceEstimate: "₹80 - ₹110 per strip",
    isPopular: true
  },
  {
    id: "p3",
    name: "Amoxicillin & Clavulanic Acid Tablets",
    category: "Tablets & Capsules",
    description: "Broad-spectrum antibacterial medication for respiratory and skin treatment prescriptions.",
    dosage: "625mg strength",
    priceEstimate: "₹180 - ₹220 per strip",
    isPopular: false
  },
  // Syrups
  {
    id: "p4",
    name: "Cough Relief Expectorant (Multipack/Single)",
    category: "Syrups",
    description: "Effective dry and wet cough bronchodilator comforting formula.",
    dosage: "100ml bottle",
    priceEstimate: "₹90 - ₹120 per bottle",
    badge: "Highly Available",
    isPopular: true
  },
  {
    id: "p5",
    name: "Multivitamin & Zinc Syrup",
    category: "Syrups",
    description: "Growth and appetite booster oral solution for complete family health.",
    dosage: "200ml bottle",
    priceEstimate: "₹140 - ₹170 per bottle",
    isPopular: false
  },
  {
    id: "p6",
    name: "Digestive Enzyme Liquid",
    category: "Syrups",
    description: "Soothes bloating, gas, and improves nutritional absorption.",
    dosage: "200ml bottle",
    priceEstimate: "₹110 - ₹130 per bottle",
    isPopular: false
  },
  // Health Supplements
  {
    id: "p7",
    name: "Calcium & Vitamin D3 Tablets",
    category: "Health Supplements",
    description: "Strengthens bones, joins, and maintains muscle functions for seniors and women.",
    dosage: "500mg IP standard",
    priceEstimate: "₹120 - ₹150 per strip",
    badge: "Top Rated",
    isPopular: true
  },
  {
    id: "p8",
    name: "Protein Powder with Micronutrients",
    category: "Health Supplements",
    description: "Premium nutritional daily mix for physical recovery, vigor, and overall support.",
    dosage: "400g tin container",
    priceEstimate: "₹380 - ₹450 per unit",
    isPopular: true
  },
  {
    id: "p9",
    name: "Premium Omega-3 Fish Oil Capsules",
    category: "Health Supplements",
    description: "Rich source of DHA/EPA for heart health, cognitive function, and radiant skin.",
    dosage: "1000mg softgels",
    priceEstimate: "₹290 - ₹350 per bottle",
    isPopular: false
  },
  // Baby Care
  {
    id: "p10",
    name: "Gentle Baby Moisturizing Lotion",
    category: "Baby Care",
    description: "Mild, non-greasy moisturizing formula specifically crafted for delicate baby skins.",
    dosage: "200ml bottle",
    priceEstimate: "₹180 - ₹240 per bottle",
    badge: "100% Safe",
    isPopular: true
  },
  {
    id: "p11",
    name: "Premium Extra-Absorb Diapers",
    category: "Baby Care",
    description: "Soft leakproof design with high breathability keeping baby dry up to 12 hours.",
    dosage: "Small/Medium/Large packs",
    priceEstimate: "Price depends on pack size",
    isPopular: true
  },
  {
    id: "p12",
    name: "Nutritional Infant Milk Formula",
    category: "Baby Care",
    description: "Stage 1 & Stage 2 pediatrician recommended early nutrition milk substitute.",
    dosage: "400g stage packs",
    priceEstimate: "₹390 - ₹440 per pack",
    isPopular: false
  },
  // Diabetic Care
  {
    id: "p13",
    name: "Digital Blood Glucometer Kit",
    category: "Diabetic Care",
    description: "Painless self-testing kit with ultra-fast accurate results and automated logging.",
    dosage: "Includes device, lancets & 10 strips",
    priceEstimate: "₹650 - ₹890 per pack",
    badge: "Essential",
    isPopular: true
  },
  {
    id: "p14",
    name: "Blood Glucose Lancets & Strips",
    category: "Diabetic Care",
    description: "Painless lancets and highly responsive enzymes strips for standard self-checks.",
    dosage: "Box of 25/50 pieces",
    priceEstimate: "₹400 - ₹750 per box",
    isPopular: true
  },
  {
    id: "p15",
    name: "Zero-Calorie Natural Stevia Sweetener",
    category: "Diabetic Care",
    description: "Organic sweetener alternative for tea, coffee, and diabetic beverage safe diets.",
    dosage: "100 pellets/sachets",
    priceEstimate: "₹120 - ₹160 per pack",
    isPopular: false
  },
  // Personal Hygiene
  {
    id: "p16",
    name: "Broad-Spectrum Antiseptic Liquid",
    category: "Personal Hygiene",
    description: "Crucial formulation for disinfecting cuts, home bath water, and laundry safety.",
    dosage: "500ml concentration",
    priceEstimate: "₹180 - ₹210 per bottle",
    badge: "Antibacterial",
    isPopular: true
  },
  {
    id: "p17",
    name: "Moisturizing Charcoal Face Wash",
    category: "Personal Hygiene",
    description: "Pore cleansing dust control face wash for active youth and outdoor workers.",
    dosage: "100g tube",
    priceEstimate: "₹110 - ₹150 per tube",
    isPopular: false
  },
  {
    id: "p18",
    name: "Ayurvedic Cool Toothpaste",
    category: "Personal Hygiene",
    description: "Natural herbal oil mix for cavity protection and lasting fresh breath.",
    dosage: "150g pack",
    priceEstimate: "₹80 - ₹110 per pack",
    isPopular: false
  },
  // Medical Equipment
  {
    id: "p19",
    name: "Automatic Blood Pressure Monitor",
    category: "Medical Equipment",
    description: "Oscillometric fast arm-cuff monitor helper for precise systolic/diastolic tracking.",
    dosage: "Includes batteries & universal cuff",
    priceEstimate: "₹1200 - ₹1700 per unit",
    badge: "High Precision",
    isPopular: true
  },
  {
    id: "p20",
    name: "Infrared Touchless Thermometer",
    category: "Medical Equipment",
    description: "Instant pediatric and adult contactless reading with glowing temperature indicators.",
    dosage: "Microchip sensor design",
    priceEstimate: "₹600 - ₹950 per unit",
    isPopular: false
  },
  {
    id: "p21",
    name: "Daily Multi-Compartment Pill Organizer",
    category: "Medical Equipment",
    description: "Durable weekly medicine organizer labeled Mon-Sun for routine dosage tracking.",
    dosage: "7-day box container",
    priceEstimate: "₹80 - ₹130 per unit",
    isPopular: false
  },
  // First Aid Essentials
  {
    id: "p22",
    name: "Medical Cotton Roll & Gauze Bundle",
    category: "First Aid Essentials",
    description: "Surgical grade highly absorbent pure organic cotton rolls and clean dressings.",
    dosage: "100g roll + 5 gauze rolls",
    priceEstimate: "₹60 - ₹90 per bundle",
    isPopular: true
  },
  {
    id: "p23",
    name: "Adhesive Sterile Band-Aids Box",
    category: "First Aid Essentials",
    description: "Crucial skin-friendly stretchy Band-Aids protecting cuts from dirt and micro infection.",
    dosage: "Pack of 50 thin stripes",
    priceEstimate: "₹70 - ₹90 per pack",
    badge: "Home Kit",
    isPopular: true
  },
  {
    id: "p24",
    name: "Healing Antiseptic Ointment",
    category: "First Aid Essentials",
    description: "Reliable fast relief for minor burns, cuts, scratches, and diaper rashes.",
    dosage: "20g topical tube",
    priceEstimate: "₹50 - ₹75 per tube",
    isPopular: true
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    name: "Satheesh Kunireddy",
    rating: 5,
    text: "New Sri Balaji Medical Store has been my go-to pharmacy in Chinna Manyam. They always have the medicines I need for my parents' blood pressure and diabetes. Very polite owner who explains everything neatly.",
    role: "Local Farmer & Resident",
    location: "Chinna Manyam",
    date: "May 12, 2026"
  },
  {
    id: "r2",
    name: "Lakshmi Narayana Reddem",
    rating: 5,
    text: "Excellent service! We requested generic medicines and they provided high-quality alternatives at almost half the price. The staff is knowledgeable and they also have good baby care products for my daughter.",
    role: "School Teacher",
    location: "Rayachoti Road",
    date: "April 28, 2026"
  },
  {
    id: "r3",
    name: "Ravi Kumar B.",
    rating: 5,
    text: "The home delivery option is a lifesaver in emergency times. I sent my prescription photo on their WhatsApp, and within an hour, the medicines were delivered to my home in the village. Genuine prices too.",
    role: "IT Professional (WFH)",
    location: "Chinna Manyam Main Bazar",
    date: "March 15, 2026"
  },
  {
    id: "r4",
    name: "Sujatha Ramachandran",
    rating: 5,
    text: "Store is very hygienic, properly air-conditioned, and stocked beautifully. They have accurate digital BP monitors and glucose testers. Happy with their friendly advisory about pediatric syrups.",
    role: "Homemaker",
    location: "Kadapa Rural Area",
    date: "May 02, 2026"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "f1",
    question: "Do you supply 100% genuine medicines?",
    answer: "Absolutely. Every single strip of medicine, health supplement, or medical device we vend is obtained strictly from licensed regional pharmaceutical distributors. We have zero tolerance for counterfeit storage and maintain precise batch validation logs.",
    category: "Authenticity"
  },
  {
    id: "f2",
    question: "How can I order home delivery in Chinna Manyam?",
    answer: "It is exceptionally simple! Just click the 'WhatsApp Order' button on this website, upload a clear photo of your doctor's valid prescription, and provide your home address. Our delivery executive will bring it to your doorstep.",
    category: "Services"
  },
  {
    id: "f3",
    question: "Do you provide discounts on bulk or chronic treatments?",
    answer: "Yes, we deeply understand the economic strain of continuous therapies like diabetes, cardiology, and respiratory conditions. We offer fair, consumer-focused discount structures and stock affordable high-quality generic alternatives.",
    category: "Pricing"
  },
  {
    id: "f4",
    question: "Are your pharmacists available to explain dosages?",
    answer: "Yes. Our senior pharmacists and managers understand dosages, side effects, and storage guidelines. We gladly explain administration times (e.g. before/after food) and help you understand your doctor's handwritten notes.",
    category: "Consultation"
  },
  {
    id: "f5",
    question: "What are your operating working hours?",
    answer: "We are open daily to serve the Chinna Manyam community. Monday to Saturday: 8:00 AM – 10:00 PM. On Sundays: 8:00 AM – 9:00 PM. For emergency support, we keep our helpline active 24/7.",
    category: "Store Info"
  }
];
