export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  description: string;
  dosage?: string;
  priceEstimate?: string;
  badge?: string;
  isPopular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  role: string;
  location: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
