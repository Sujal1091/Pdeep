export interface ProjectCourse {
  id: string;
  projectNumber: string;
  title: string;
  badge: string;
  shortDescription: string;
  duration: string;
  certification: string;
  engagement: string;
  schedule: string;
  ageEligibility: string;
  coverage?: string;
  internship?: string;
  modules?: string;
  classes?: string;
  whoCanApply: string[];
  marketplaces?: string[];
  learningPoints: string[];
  processSteps: string[];
  highlights?: string[];
  colorAccent?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  projectTag: string;
  image: string;
  rating: number;
  quote: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'product-listing' | 'email-support' | 'admc' | 'payment-policy';
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  occupation: string;
  interestedProject: string;
  workMode: string;
  message: string;
}
