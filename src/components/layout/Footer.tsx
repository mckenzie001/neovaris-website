"use client";

import { useQuoteModal } from "@/lib/QuoteModalContext";
import { LogoMark } from "./Navbar";

const serviceLinks = [
  "CCTV Systems",
  "Networking & WiFi",
  "Solar Power",
  "Access Control",
  "Smart Home",
];

const companyLinks = ["About Us", "Projects", "Blog", "Careers"];

const socialLinks = ["Li", "Fb", "Wa", "Ig"];

export default function Footer() {
  const { openModal } = useQuoteModal();

  return (
    <footer className="border-t border-rule px-5 pb-10 pt-16 md:px-8">
      <div className="mx-auto max-w-wrap">
        <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <a href="#" className="inline-flex items-center gap-[9px]">
              <LogoMark />
              <span className="font-display text-[17px] font-bold tracking-[-0.02em]">
                Neovaris Technologies
              </span>
            </a>
            <p className="my-3 max-w-[260px] text-sm leading-[1.7] text-ivory-35">
              Intelligent infrastructure solutions for homes, businesses, and
              institutions across Ghana.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] border border-rule text-xs font-bold text-ivory-35 transition-colors hover:border-ivory-15 hover:text-ivory"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div>
            <h5 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-ivory-35">
              Contact
            </h5>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="tel:+233556165573"
                  className="text-sm text-ivory-35 transition-colors hover:text-ivory"
                >
                  +233 55 616 5573
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@neovaristechnologies.com"
                  className="text-sm text-ivory-35 transition-colors hover:text-ivory"
                >
                  hello@neovaristechnologies.com
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-ivory-35 transition-colors hover:text-ivory">
                  Accra, Ghana
                </a>
              </li>
              <li>
                <button
                  onClick={openModal}
                  className="text-sm text-ivory-35 transition-colors hover:text-ivory"
                >
                  Get a quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-6">
          <p className="text-[13px] text-ivory-35">
            © 2026 Neovaris Technologies || All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[13px] text-ivory-35 transition-colors hover:text-ivory-60">
              Privacy
            </a>
            <a href="#" className="text-[13px] text-ivory-35 transition-colors hover:text-ivory-60">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="mb-4 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-ivory-35">
        {title}
      </h5>
      <ul className="flex flex-col gap-2.5">
        {links.map((label) => (
          <li key={label}>
            <a href="#" className="text-sm text-ivory-35 transition-colors hover:text-ivory">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
