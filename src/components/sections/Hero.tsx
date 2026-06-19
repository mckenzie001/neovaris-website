"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/lib/QuoteModalContext";
import Button from "@/components/ui/Button";

const proofPoints = [
  "Web & software solutions",
  "Security & networking systems",
  "Maintenance & support",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Hero() {
  const { openModal } = useQuoteModal();

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-slate-950 px-8 pb-20 pt-32 text-center">
      <div
        className="
      absolute inset-0 z-0
      bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_30%)]
    "
      />

      <div className="hero-grid absolute inset-0 z-0" />

      <motion.div
        className="relative z-10 max-w-[820px]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
        >
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-cyan-300" />
          <span className="text-xs font-semibold tracking-[0.04em]">
            Now serving Greater Accra & beyond
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mb-6 font-display text-[clamp(44px,6.5vw,88px)] font-bold leading-[1.02] tracking-[-0.035em]"
        >
          Building the
          <br />
          <span className="text-gradient-accent">
            technology behind modern businesses
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mb-10 max-w-[520px] text-[clamp(16px,1.5vw,19px)] leading-[1.7] text-ivory-60"
        >
          From websites and custom software solutions to CCTV, networking, IT
          support, and infrastructure, Neovaris Technologies delivers reliable
          technology solutions that help organizations operatate, grow, and stay
          connected.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mb-16 flex flex-wrap items-center justify-center gap-3"
        >
          <Button variant="primary" size="lg" onClick={openModal} showArrow>
            Request a free quote
          </Button>
          <a
            href="#gallery"
            className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-ivory-60 transition-colors hover:text-ivory"
          >
            See our work
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {proofPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-1.5 text-[13px] font-medium text-ivory-60"
            >
              <CheckCircle2
                size={13}
                className="flex-shrink-0 text-accentGreen"
              />
              {point}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
