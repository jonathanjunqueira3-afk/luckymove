import {
  ShieldCheck,
  Users,
  Sparkles,
  Smile,
  Home,
  Building2,
  Sofa,
  PackageOpen,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const WHY: Feature[] = [
  {
    icon: Sparkles,
    title: "Premium Service",
    desc: "A white-glove standard on every move — from the first call to the final box placed exactly where you want it.",
  },
  {
    icon: Users,
    title: "Professional Team",
    desc: "Background-checked, uniformed crews trained in-house. No day-labour, no strangers, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    desc: "Comprehensive transit and contents cover on every job, up to $250,000. Your belongings are protected end to end.",
  },
  {
    icon: Smile,
    title: "Stress-Free Moving",
    desc: "We pack, lift, transport, assemble and tidy. You just unlock the new door and walk in.",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tag: string;
};

export const SERVICES: Service[] = [
  {
    icon: Home,
    title: "Residential Moving",
    desc: "Studios to five-bedroom homes, relocated with precision and care.",
    tag: "01",
  },
  {
    icon: Building2,
    title: "Commercial Moving",
    desc: "Offices and retail moved after hours — zero downtime for your business.",
    tag: "02",
  },
  {
    icon: Sofa,
    title: "Furniture Transport",
    desc: "Single-item and specialty pieces, wrapped, secured and delivered flawlessly.",
    tag: "03",
  },
  {
    icon: PackageOpen,
    title: "Packing Services",
    desc: "Museum-grade materials and a room-by-room system that keeps everything traceable.",
    tag: "04",
  },
  {
    icon: Truck,
    title: "Interstate Moves",
    desc: "Sydney to Perth and everywhere between, with live tracking the whole way.",
    tag: "05",
  },
];

export type Step = {
  n: string;
  title: string;
  desc: string;
};

export const STEPS: Step[] = [
  {
    n: "01",
    title: "Book",
    desc: "Get an instant, honest quote online. Lock your date in minutes — no call centres, no pressure.",
  },
  {
    n: "02",
    title: "Pack",
    desc: "We arrive with premium materials and pack your home room by room, labelled and inventoried.",
  },
  {
    n: "03",
    title: "Move",
    desc: "Your dedicated crew loads, transports and tracks every item in real time to the new address.",
  },
  {
    n: "04",
    title: "Settle",
    desc: "We reassemble, position and remove every box, so you settle into a home that's already yours.",
  },
];

export type Stat = { value: number; suffix: string; label: string; decimals?: number };

export const STATS: Stat[] = [
  { value: 1000, suffix: "+", label: "Successful Moves" },
  { value: 5, suffix: "★", label: "Customer Rating" },
  { value: 60, suffix: "min", label: "Avg. Response Time" },
  { value: 100, suffix: "%", label: "Fully Insured" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Joe and Lucas were very professional, punctual, and handled our move with great care from start to finish. They made what could have been a stressful experience feel easy and well organised. Everything arrived safely.",
    name: "Nicola Pitti",
    role: "Google Review",
    location: "Sydney, NSW",
  },
  {
    quote:
      "Lucas and Philipo are absolutely exceptional! My enormous move was a dream. They are so polite, strong, careful and go above and beyond! Can't recommend them high enough.",
    name: "Jordy Rose",
    role: "Google Review",
    location: "Sydney, NSW",
  },
  {
    quote:
      "Second time using these guys and Joe and Lucas were excellent throughout the full experience. Very professional and helpful. Would definitely recommend.",
    name: "Craig Downing",
    role: "Google Review",
    location: "Sydney, NSW",
  },
  {
    quote:
      "Best removals, very kind, fit and efficient, 100% recommended.",
    name: "Lucy Galperin",
    role: "Google Review",
    location: "Sydney, NSW",
  },
];

export type GoogleReview = {
  quote: string;
  name: string;
  time: string;
};

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    quote:
      "They worked efficiently, communicated clearly throughout the day, and their friendly attitude was greatly appreciated. I would highly recommend them to anyone looking for a reliable and trustworthy removalist.",
    name: "Nicola Pitti",
    time: "1 week ago",
  },
  {
    quote:
      "Euan, Lucas and Dean did a great job — big move and really friendly. Would use again.",
    name: "Aya Larkin",
    time: "2 weeks ago",
  },
  {
    quote:
      "Euan and Lucas were amazing. They were terrific and strong — wonderful guys, 100%. Highly recommend.",
    name: "Susie Williams",
    time: "3 weeks ago",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How far in advance should I book?",
    a: "We recommend 7–10 days for the smoothest experience, but we hold priority slots for short-notice moves and can often accommodate within 48 hours.",
  },
  {
    q: "Are my belongings insured during the move?",
    a: "Yes. Every move includes comprehensive transit and contents cover up to $250,000 as standard, documented against a full inventory checklist.",
  },
  {
    q: "Do you provide packing materials?",
    a: "We do. Premium boxes, bubble wrap, furniture blankets and labels are delivered ahead of your move at no freight cost — you only pay for what you use.",
  },
  {
    q: "Do you handle interstate relocations?",
    a: "Absolutely. We move across all Australian states with sealed transport and live GPS tracking from pickup to final delivery.",
  },
  {
    q: "How does pricing work?",
    a: "You receive a transparent, fixed quote after a quick virtual walkthrough. No hidden call-out fees, and the price never changes without your say-so.",
  },
];

export const NAV_LINKS = [
  { label: "Why Us", href: "/#why" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Reviews", href: "/#reviews" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];
