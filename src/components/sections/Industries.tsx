import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <section className="px-8 py-[120px]">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="Who we serve"
            title="Built for every environment"
            align="center"
            className="mb-16"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="cursor-default rounded-md2 border border-rule bg-ink-2 px-6 py-8 text-center transition-colors duration-200 hover:border-brand/25 hover:bg-ink-3"
              >
                <span className="mb-3 block text-[28px] leading-none">
                  <industry.icon className="mx-auto h-12 w-12" />
                </span>
                <div className="font-display text-sm font-semibold tracking-[-0.005em] text-ivory-60">
                  {industry.title}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
