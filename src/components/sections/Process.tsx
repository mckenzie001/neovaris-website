import Reveal from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="px-8 pb-[120px]">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <div className="mb-16">
            <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
              How it works
            </p>
            <h2 className="mt-3 font-display text-[clamp(30px,3.8vw,52px)] font-semibold leading-[1.1] tracking-[-0.025em]">
              From first call
              <br />
              to full operation
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg2 border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-ink-2 px-7 py-9">
                <div className="mb-5 font-display text-xs font-bold tracking-[0.1em] text-brand">
                  {step.step}
                </div>
                <div className="mb-2.5 font-display text-[17px] font-semibold tracking-[-0.015em]">
                  {step.title}
                </div>
                <p className="text-sm leading-[1.65] text-ivory-60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
