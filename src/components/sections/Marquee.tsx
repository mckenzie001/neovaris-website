import Image from "next/image";
import { marqueeItems } from "@/lib/data";

export default function Marquee() {
  return (
    <div className="overflow-hidden pb-32">
      <div className="flex w-max animate-marquee gap-4 [animation-play-state:running] hover:[animation-play-state:paused]">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="group relative h-[240px] w-[380px] flex-shrink-0 overflow-hidden rounded-lg2 border border-rule"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="380px"
              className="object-cover brightness-[0.88] saturate-[0.9] transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-95 group-hover:saturate-100"
            />
            <div className="absolute bottom-3 left-3 rounded-sm2 border border-rule bg-ink/[0.82] px-2.5 py-[5px] font-display text-[11px] font-semibold tracking-[0.05em] text-ivory-60 backdrop-blur-sm">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
