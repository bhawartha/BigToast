import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <div className="bg-[#131317]">
      <Hero />
      <ClientMarquee />
      <PhilosophySection />
      <ServicesSection />
      <ProjectsSection />
      <HowWeWorkSection />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
