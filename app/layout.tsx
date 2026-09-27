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
  title: "Big Toast Company — Storytelling & Distribution for Founders and Brands",
  description:
    "Big Toast Company helps founders and brands turn ideas, expertise and experiences into stories, content and distribution systems that earn attention, build authority and create opportunities. Based in Delhi, India. Working globally.",
  keywords: [
    "storytelling company India",
    "founder content strategy",
    "podcast production India",
    "AI content",
    "brand video",
    "content distribution system",
    "personal branding founders",
    "Big Toast Company",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Big Toast Company — Storytelling & Distribution for Founders and Brands",
    description:
      "Big Toast Company helps founders and brands turn ideas, expertise and experiences into stories, content and distribution systems that earn attention, build authority and create opportunities. Based in Delhi, India. Working globally.",
    url: "https://bigtoastcompany.com",
    siteName: "Big Toast Company",
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
