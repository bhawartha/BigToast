import type { Metadata } from "next";
import { Figtree, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BigToast - Modern Creative Design & Strategy Studio",
  description:
    "BigToast is a modern creative design studio focused on intentional design and strategic messaging, helping brands connect, stand out, and grow with clarity.",
  keywords: [
    "BigToast",
    "Creative Design Studio",
    "Strategic Messaging",
    "UI UX Design",
    "Next.js Development",
    "AI Integration",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "BigToast - Modern Creative Design & Strategy Studio",
    description:
      "Intentional design & strategic messaging to help startups and enterprises scale with creativity.",
    url: "https://bigtoast.studio",
    siteName: "BigToast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${playfair.variable}`}>
      <body className="antialiased selection:bg-sky-600 selection:text-white">
        <SmoothScroll>
          {/* Ambient Lighting Background */}
          <div className="fixed-bg-glow" />

          {/* Main Top Header Navbar */}
          <Navbar />

          {/* Page Contents */}
          <main className="relative z-10">{children}</main>

          {/* Global Footer */}
          <Footer />

          {/* Floating Scroll To Top Button */}
          <ScrollToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
