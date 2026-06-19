"use client";

import { CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/lib/QuoteModalContext";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const microProof = [
  "Web & Software",
  "IT Infrastructure",
  "Security Solutions",
  "Ongoing Support",
];

export default function CTA() {
  const { openModal } = useQuoteModal();

  return (
    <section id="contact" className="border-t border-rule px-8 py-[120px]">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <div className="cta-glow relative text-center">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              Start today
            </p>
            <h2 className="mb-5 mt-4 font-display text-[clamp(30px,3.8vw,52px)] font-semibold leading-[1.1] tracking-[-0.025em]">
              Ready when you are.
            </h2>
            <p className="mx-auto mb-10 max-w-[480px] text-lg leading-[1.75] text-ivory-60">
              Ready to transform your business? Whether you&apos;re launching a new
              website, upgrading your infrastructure, improving security, or
              building custom software, Neovaris provides technology solutions
              designed for long-term growth.
            </p>

            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              <Button variant="primary" size="lg" onClick={openModal}>
                Request a quote
              </Button>
              <Button variant="ghost" size="lg" href="tel:+233556165573">
                +233 55 616 5573
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              {microProof.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-1.5 text-[13px] font-medium text-ivory-35"
                >
                  <CheckCircle2 size={13} className="text-accentGreen" />
                  {point}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
