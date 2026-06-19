"use client";

import {
  useState,
  useEffect,
  type FormEvent,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/lib/QuoteModalContext";
import { serviceOptions } from "@/lib/data";
import type { QuoteFormData } from "@/lib/types";
import Button from "./Button";

const initialFormState: QuoteFormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>(initialFormState);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeModal]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset form state whenever the modal closes
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setFormData(initialFormState);
    }
  }, [isOpen]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Failed to send request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <motion.div
            className="relative w-full max-w-[500px] rounded-xl2 border border-white/[0.09] bg-ink-2 p-10 shadow-modal"
            initial={{ opacity: 0, scale: 0.97, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 6 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              onClick={closeModal}
              aria-label="Close quote request form"
              className="absolute right-4 top-4 flex h-[30px] w-[30px] items-center justify-center rounded-sm2 border border-rule text-ivory-35 transition-colors hover:border-ivory-15 hover:text-ivory"
            >
              <X size={16} />
            </button>

            {!submitted ? (
              <>
                <h3 className="font-display text-[22px] font-bold tracking-[-0.02em]">
                  Request a free quote
                </h3>
                <p className="mb-7 mt-1.5 text-sm text-ivory-60">
                  Tell us about your project and we&apos;ll provide a tailored
                  solution and quote within 24–48 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field label="Full name">
                      <input
                        required
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="quote-input"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+233…"
                        className="quote-input"
                      />
                    </Field>
                  </div>

                  <Field label="Email" className="mb-4">
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="quote-input"
                    />
                  </Field>

                  <Field label="Service needed" className="mb-4">
                    <select
                      name="service"
                      title="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="quote-input"
                      required
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Tell us about your project" className="mb-4">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Location, property type, current challenges…"
                      rows={3}
                      className="quote-input resize-y"
                      required
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full justify-center !px-4 !py-3.5 !text-[15px]"
                  >
                    {isSubmitting ? "Sending..." : "Send request"}
                  </Button>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <CheckCircle2
                  size={44}
                  className="mx-auto mb-4 text-accentGreen"
                />
                <div className="font-display text-xl font-medium tracking-[-0.015em] mb-2">
                  Thank you for contacting Neovaris Technologies
                </div>

                <p className="text-[15px] leading-[1.7] text-ivory-60">
                  We&apos;ve received your request and a member of our team will
                  contact you within 24–48 hours to discuss your project.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-[7px] block font-display text-xs font-semibold uppercase tracking-[0.05em] text-ivory-35">
        {label}
      </label>
      {children}
    </div>
  );
}
