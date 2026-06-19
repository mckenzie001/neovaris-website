import { Star } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";
import type { TestimonialItem } from "@/lib/types";

const accentClasses: Record<TestimonialItem["accent"], string> = {
  blue: "bg-brand-dim text-brand",
  green: "bg-accentGreen/10 text-accentGreen",
  gold: "bg-accentGold/[0.08] text-accentGold",
};

export default function Testimonials() {
  return (
    <section className="border-t border-rule bg-ink-2 px-8 py-[120px]">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Client feedback"
            title={
              <>
                Trusted by people who
                <br />
                can&apos;t afford downtime
              </>
            }
            align="center"
            className="mb-16"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex flex-col gap-5 rounded-lg2 border border-rule bg-ink-3 p-8 transition-colors duration-200 hover:border-brand/20"
              >
                <div className="flex gap-0.5 text-accentGold">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="flex-1 text-[15px] leading-[1.75] text-ivory-60">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-rule pt-5">
                  <div
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold ${
                      accentClasses[testimonial.accent]
                    }`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="mb-0.5 font-display text-sm font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-ivory-35">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
