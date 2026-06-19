"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useQuoteModal } from "@/lib/QuoteModalContext";
import { navLinks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { openModal } = useQuoteModal();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[90] flex h-16 items-center px-5 transition-colors duration-200 md:px-8 ${
          isScrolled
            ? "border-b border-rule bg-ink/[0.82] backdrop-blur-2xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-wrap items-center justify-between gap-8">
          <a href="#" className="flex flex-shrink-0 items-center gap-[9px]">
            <LogoMark />
            <span className="font-display text-[17px] font-bold tracking-[-0.02em]">
              Neovaris Technologies
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ivory-60 transition-colors hover:text-ivory"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <a
              href="tel:+233000000000"
              className="hidden rounded-full border border-rule px-[18px] py-[9px] text-sm font-semibold text-ivory-60 transition-colors hover:border-ivory-15 hover:text-ivory md:inline-flex"
            >
              Call Us
            </a>
            <Button
              variant="primary"
              onClick={openModal}
              className="!px-[18px] !py-[9px] !text-sm"
            >
              Get a Quote
            </Button>
            <button
              aria-label="Open menu"
              onClick={() => setIsDrawerOpen(true)}
              className="flex p-1 text-ivory-60 md:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            className="fixed inset-0 z-[95] flex flex-col gap-1 bg-ink/[0.96] px-8 pb-10 pt-20 backdrop-blur-xl md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              aria-label="Close menu"
              onClick={closeDrawer}
              className="absolute right-5 top-6 text-ivory-60"
            >
              <X size={24} />
            </button>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeDrawer}
                className="border-b border-rule py-3.5 font-display text-xl font-semibold text-ivory-60 transition-colors hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              onClick={() => {
                openModal();
                closeDrawer();
              }}
              className="mt-6 justify-center"
            >
              Get a Free Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LogoMark() {
  return (
    <div className="relative h-9 w-9 overflow-hidden">
      <Image
        src="/icon.png"
        alt="Neovaris Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}

export { LogoMark };
