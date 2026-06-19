import { ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="px-8 py-[120px]">
      <div className="mx-auto max-w-wrap">
        <Reveal>
          <SectionHeading
            eyebrow="What we install"
            title={
              <>
                The full stack of
                <br />
                physical technology
              </>
            }
            className="mb-16 max-w-[560px]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg2 border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative flex flex-col gap-4 bg-ink-2 px-8 py-9 transition-colors duration-200 hover:bg-ink-3"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] border border-brand/15 bg-brand-dim">
                    <Icon size={20} className="text-brand" />
                  </div>
                  <div className="font-display text-[17px] font-semibold tracking-[-0.015em]">
                    {service.title}
                  </div>
                  <p className="text-sm leading-[1.65] text-ivory-60">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-ivory-35 transition-colors group-hover:text-brand">
                    Learn more <ChevronRight size={12} />
                  </div>

                  {/* underline accent on hover */}
                  <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-brand to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
