import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { galleryItems } from "@/lib/data";

const colSpanClass: Record<number, string> = {
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
};

export default function Gallery() {
  return (
    <section id="gallery" className="px-8 pb-[120px]">
      <div className="mx-auto max-w-wrap-wide">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-brand">
                Featured projects
              </p>
              <h2 className="mt-3 font-display text-[clamp(30px,3.8vw,52px)] font-semibold leading-[1.1] tracking-[-0.025em]">
                Real deployments.
                <br />
                Proven results.
              </h2>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-ivory-60 transition-colors hover:text-ivory"
            >
              View all projects
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[240px]">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className={`group relative h-[200px] overflow-hidden rounded-md2 border border-rule bg-ink-2 lg:h-auto ${colSpanClass[item.colSpan]}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover brightness-[0.8] saturate-[0.85] transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-90 group-hover:saturate-100"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/85 to-transparent p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="mb-1 font-display text-[10px] font-bold uppercase tracking-[0.1em] text-brand">
                    {item.tag}
                  </div>
                  <div className="font-display text-base font-semibold leading-[1.3]">
                    {item.title}
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
