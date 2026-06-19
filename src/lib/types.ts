import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  suffix: string;
  label: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhyStatItem {
  value: string;
  suffix: string;
  label: string;
  sub: string;
}

export interface IndustryItem {
  icon: LucideIcon;
  title: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  stars: number;
  text: string;
  name: string;
  role: string;
  initials: string;
  accent: "blue" | "green" | "gold";
}

export interface GalleryItem {
  src: string;
  alt: string;
  tag: string;
  title: string;
  colSpan: number;
}

export interface MarqueeItem {
  src: string;
  alt: string;
  label: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
