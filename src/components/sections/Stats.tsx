import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg2 border border-rule bg-rule md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink-2 px-8 py-10 text-center">
                <div className="mb-2 font-display text-[clamp(36px,4vw,52px)] font-bold leading-none tracking-[-0.04em]">
                  {stat.value}
                  <span className="text-brand">{stat.suffix}</span>
                </div>
                <div className="text-[13px] font-medium text-ivory-35">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
