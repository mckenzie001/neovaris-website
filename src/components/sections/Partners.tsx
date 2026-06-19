import Reveal from "@/components/ui/Reveal";
import { partnerLogos } from "@/lib/data";

export default function Partners() {
  return (
    <Reveal>
      <section className="border-y border-rule px-8 py-16">
        <div className="mx-auto max-w-wrap">
          <p className="mb-9 text-center text-[13px] leading-[1.5] text-ivory-35">
            Trusted technology partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partnerLogos.map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="partner-logo whitespace-nowrap font-display text-lg font-bold tracking-[-0.02em] text-white"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
