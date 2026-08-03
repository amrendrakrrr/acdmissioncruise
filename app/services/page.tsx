import Hero from "@/components/services/Hero";
import ServicesGrid from "@/components/services/ServicesGrid";
import Process from "@/components/services/Process";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import FAQ from "@/components/services/FAQ";
import CTA from "@/components/services/CTA";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ServicesGrid />
      <Process />
      <WhyChooseUs />
      <FAQ />
      <CTA />
    </main>
  );
}