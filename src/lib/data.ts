import {
  Camera,
  Wifi,
  Sun,
  Fingerprint,
  Home,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  Clock,
  Factory,
  Landmark,
  ShoppingCart,
  Building2,
  GraduationCap,
  Hospital,
  Hotel,
} from "lucide-react";
import type {
  ServiceItem,
  StatItem,
  FeatureItem,
  WhyStatItem,
  IndustryItem,
  ProcessStepItem,
  TestimonialItem,
  GalleryItem,
  MarqueeItem,
} from "./types";

export const services: ServiceItem[] = [
  {
    icon: Camera,
    title: "CCTV & Surveillance",
    description:
      "IP, AI-powered, and analog cameras with cloud storage, remote viewing, and night vision — indoor and outdoor.",
  },
  {
    icon: Wifi,
    title: "Networking & WiFi",
    description:
      "Structured cabling, fiber optic backbones, WiFi 6 mesh, and managed switches for enterprise-grade connectivity.",
  },
  {
    icon: Sun,
    title: "Solar Power Systems",
    description:
      "Grid-tied, off-grid, and hybrid solar — with battery storage, inverters, and live energy monitoring dashboards.",
  },
  {
    icon: Fingerprint,
    title: "Access Control & Biometrics",
    description:
      "Smart card readers, facial recognition, fingerprint terminals, and gate automation. Who enters, when, and where — your call.",
  },
  {
    icon: Home,
    title: "Smart Home & Intercom",
    description:
      "Automated lighting, climate control, video intercoms, and voice-activated scenes for modern intelligent living.",
  },
  {
    icon: ShieldCheck,
    title: "Electric Fence & IT Infra",
    description:
      "High-voltage perimeter fencing, server rooms, UPS systems, and complete rack builds for robust on-site infrastructure.",
  },
];

export const stats: StatItem[] = [
  {
    value: "Web",
    suffix: "",
    label: "Development",
  },
  {
    value: "IT",
    suffix: "",
    label: "Infrastructure",
  },
  {
    value: "Security",
    suffix: "",
    label: "Solutions",
  },
  {
    value: "Support",
    suffix: "",
    label: "& Maintenance",
  },
];

export const features: FeatureItem[] = [
  {
    icon: MapPin,
    title: "Solutions tailored to your needs",
    description:
      "We design technology solutions around your goals, not one-size-fits-all packages.",
  },
  {
    icon: BadgeCheck,
    title: "Multi-disciplinary expertise",
    description:
      "Websites, software, networking, security systems, and IT infrastructure.",
  },
  {
    icon: Clock,
    title: "Long-term support & maintenance",
    description:
      "Ongoing support, updates, and technical guidance when you need it.",
  },
];

export const whyStats: WhyStatItem[] = [
  {
    value: "360",
    suffix: "°",
    label: "Technology Solutions",
    sub: "Comprehensive services covering software, infrastructure, security, and support.",
  },
  {
    value: "24",
    suffix: "/7",
    label: "Business Continuity",
    sub: "Solutions designed for reliability, security, and uninterrupted operations.",
  },
  {
    value: "End",
    suffix: "-to-End",
    label: "Delivery",
    sub: "From consultation and design to deployment and ongoing support.",
  },
  {
    value: "One",
    suffix: "",
    label: "Technology Partner",
    sub: "A single team for websites, software, networking, security, and infrastructure.",
  },
];

export const industries: IndustryItem[] = [
  {
    icon: Home,
    title: "Homeowners",
  },
  {
    icon: Building2,
    title: "Businesses",
  },
  {
    icon: GraduationCap,
    title: "Schools",
  },
  {
    icon: Hospital,
    title: "Hospitals",
  },
  {
    icon: Hotel,
    title: "Hotels",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
  },
  {
    icon: Landmark,
    title: "Government",
  },
  {
    icon: Factory,
    title: "Manufacturing",
  },
];

export const processSteps: ProcessStepItem[] = [
  {
    step: "STEP 01",
    title: "Discovery",
    description:
      "We learn about your goals, challenges, and requirements.",
  },
  {
    step: "STEP 02",
    title: "Strategy & Planning",
    description:
      "We define the right solution, scope, timeline, and approach.",
  },
  {
    step: "STEP 03",
    title: "Implementation",
    description:
      "Our team builds, configures, and deploys your solution.",
  },
  {
    step: "STEP 04",
    title: "Launch & Support",
    description:
      "Testing, handover, training, and ongoing technical support.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    stars: 5,
    text: "Neovaris Technologies transformed our 3-branch clinic with a fiber network and biometric system that actually works. When we had an issue, their team was on-site within two hours. Genuinely exceptional.",
    name: "Dr. Kwesi Mensah",
    role: "Medical Director, Kumasi",
    initials: "DK",
    accent: "blue",
  },
  {
    stars: 5,
    text: "Our guests control their rooms from their phones, and we have full property visibility from a single screen. The smart integration was flawless. We've recommended them to three other hotel owners.",
    name: "Abena Asante",
    role: "General Manager, East Legon Hotel",
    initials: "AA",
    accent: "green",
  },
  {
    stars: 5,
    text: "Zero power disruptions since our 20 kW solar install. They handled permits, installation, and the monitoring portal — completely turnkey. We've saved significantly on ECG bills every month.",
    name: "Richmond Osei",
    role: "Operations Manager, Manufacturing Co.",
    initials: "RO",
    accent: "gold",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    alt: "Office complex networking",
    tag: "Commercial",
    title: "5-Floor Office Complex, Accra",
    colSpan: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=80",
    alt: "Solar installation",
    tag: "Energy",
    title: "30 kW Solar System, Tema",
    colSpan: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    alt: "CCTV system",
    tag: "Surveillance",
    title: "64-Camera Network, East Legon",
    colSpan: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=900&q=80",
    alt: "Access control",
    tag: "Access",
    title: "Biometric Campus, Kumasi",
    colSpan: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1545987796-200677ee1011?w=900&q=80",
    alt: "Server room",
    tag: "Infrastructure",
    title: "Data Centre Build, Cantonments",
    colSpan: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1558002038-bb4237b50b11?w=900&q=80",
    alt: "Smart home",
    tag: "Residential",
    title: "Smart Estate, Airport Hills",
    colSpan: 4,
  },
];

const marqueeBase: MarqueeItem[] = [
  {
    src: "/images/dev.jpg",
    alt: "Website development",
    label: "Website Development",
  },
  {
    src: "/images/infra.jpg",
    alt: "IT infrastructure",
    label: "IT Infrastructure",
  },
  {
    src: "/images/networking.jpg",
    alt: "Networking",
    label: "Networking & Connectivity",
  },
  {
    src: "/images/dev2.jpg",
    alt: "Software development",
    label: "Custom Software",
  },
  {
    src: "/images/Smart.jpg",
    alt: "Smart technology",
    label: "Smart Solutions",
  },
  {
    src: "/images/solar.jpg",
    alt: "Solar power",
    label: "Power Solutions",
  },
  {
    src: "/images/cam.jpg",
    alt: "Security monitoring",
    label: "Security Systems",
  },
  {
    src: "/images/access.jpg",
    alt: "Access control",
    label: "Access Control & Biometrics",
  },
];

// Duplicated for a seamless CSS marquee loop (-50% translateX)
export const marqueeItems: MarqueeItem[] = [...marqueeBase, ...marqueeBase];

export const partnerLogos: string[] = [
  "Hikvision",
  "Dahua",
  "Huawei",
  "Next.js",
  "Cloudflare",
  "Cisco",
  "Amazon Web Services",
];

export const navLinks: { href: string; label: string }[] = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Projects" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const serviceOptions: string[] = [
  "CCTV & Surveillance",
  "Networking & WiFi",
  "Solar Power",
  "Access Control & Biometrics",
  "Smart Home & Intercom",
  "Electric Fence & IT Infrastructure",
  "Multiple services",
  "Web & software solutions",
];
