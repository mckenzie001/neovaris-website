/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#060810",
          2: "#0C111F",
          3: "#131929",
        },
        rule: "rgba(255,255,255,0.07)",
        "rule-light": "rgba(255,255,255,0.04)",
        brand: {
          DEFAULT: "#5B8EFF",
          dim: "rgba(91,142,255,0.1)",
          glow: "rgba(91,142,255,0.18)",
          light: "#7AAEFF",
        },
        ivory: {
          DEFAULT: "#F4F6FF",
          60: "rgba(244,246,255,0.6)",
          35: "rgba(244,246,255,0.35)",
          15: "rgba(244,246,255,0.15)",
        },
        accentGreen: "#30D88A",
        accentGold: "#F5C842",
      },
      fontFamily: {
        display: ["var(--font-dm-sans)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        sm2: "8px",
        md2: "14px",
        lg2: "22px",
        xl2: "32px",
      },
      maxWidth: {
        wrap: "1120px",
        "wrap-wide": "1320px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blink: "blink 2.4s ease-in-out infinite",
        marquee: "marquee 36s linear infinite",
      },
      boxShadow: {
        "btn-primary": "0 1px 0 rgba(255,255,255,.15) inset, 0 8px 24px rgba(91,142,255,.28)",
        "btn-primary-hover": "0 1px 0 rgba(255,255,255,.2) inset, 0 12px 32px rgba(91,142,255,.4)",
        modal: "0 40px 80px rgba(0,0,0,.6)",
      },
    },
  },
  plugins: [],
};
