import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import CaseStudySection from "@/components/CaseStudySection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
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
      <CaseStudySection />
      <TeamSection />
      <BlogSection limit={3} />
      <FAQSection />
      <CTABanner />
    </div>
  );
}

