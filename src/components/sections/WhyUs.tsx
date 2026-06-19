import Reveal from "@/components/ui/Reveal";
import { features, whyStats } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why" className="border-y border-rule bg-ink-2 px-8 py-[120px]">
      <div className="mx-auto max-w-wrap">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                Why Neovaris Technologies
              </p>
              <h2 className="mb-5 mt-4 font-display text-[clamp(30px,3.8vw,52px)] font-semibold leading-[1.1] tracking-[-0.025em]">
                We solve technology challenges.
                <br />
                Not just technology projects.
              </h2>
              <p className="mb-12 text-lg leading-[1.75] text-ivory-60">
                Whether you need a business website, custom software, network
                infrastructure, security systems, or ongoing IT support,
                Neovaris delivers practical technology solutions designed for
                growth, reliability, and long-term value.
              </p>

              <div className="flex flex-col">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className={`flex items-start gap-4 border-b border-rule py-6 ${
                        index === 0 ? "border-t" : ""
                      }`}
                    >
                      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[9px] border border-brand/15 bg-brand-dim">
                        <Icon size={17} className="text-brand" />
                      </div>
                      <div>
                        <div className="mb-1 font-display text-[15px] font-semibold tracking-[-0.01em]">
                          {feature.title}
                        </div>
                        <p className="text-sm leading-[1.65] text-ivory-60">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg2 border border-rule bg-rule">
              {whyStats.map((stat) => (
                <div key={stat.label} className="bg-ink-3 px-7 py-9">
                  <div className="mb-2 font-display text-[clamp(40px,4vw,56px)] font-bold leading-none tracking-[-0.04em]">
                    {stat.value}
                    <span className="text-brand">{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-medium text-ivory-35">
                    {stat.label}
                  </div>
                  <p className="mt-3 text-[13px] leading-[1.55] text-ivory-60">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
