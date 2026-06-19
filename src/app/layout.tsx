import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { QuoteModalProvider } from "@/lib/QuoteModalContext";
import QuoteModal from "@/components/ui/QuoteModal";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Neovaris Technologies",
    template: "%s | Neovaris Technologies",
  },
  description:
    "Technology solutions for modern businesses. Websites, software development, networking, security systems, infrastructure, and IT support.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-body">
        <QuoteModalProvider>
          {children}
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
