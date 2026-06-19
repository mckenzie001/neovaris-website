"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Partners from "@/components/sections/Partners";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import WhyUs from "@/components/sections/WhyUs";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <Marquee />

        {/* Trust */}
        <Partners />
        <Stats />

        {/* What We Do */}
        <Services />
        {/* <Products /> */}

        {/* Why Neovaris */}
        <WhyUs />
        <Industries />
        <Process />

        {/* Work */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-black/70 backdrop-blur-sm">
            <div className="text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Portfolio
              </p>

              <h3 className="font-display text-3xl font-semibold text-white">
                Coming Soon
              </h3>

              <p className="mt-3 max-w-md text-ivory-60">
                We&apos;re currently documenting our projects and case studies.
                Check back soon to see our latest work.
              </p>
            </div>
          </div>

          <div className="blur-md select-none">
            {/* Existing project grid */}
            <Gallery />
          </div>
        </div>

        {/* Social Proof */}
        <Testimonials />

        {/* Conversion */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
