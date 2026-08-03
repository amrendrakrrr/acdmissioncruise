import Hero from "@/components/mbbs-abroad/Hero";
import Countries from "@/components/mbbs-abroad/Countries";
import WhyStudyMBBS from "@/components/mbbs-abroad/WhyStudyMBBS";
import AdmissionProcess from "@/components/mbbs-abroad/AdmissionProcess";
import FAQ from "@/components/mbbs-abroad/FAQ";
import CTA from "@/components/mbbs-abroad/CTA";

export default function MBBSAbroadPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Countries />
      <WhyStudyMBBS />
      <AdmissionProcess />
      <FAQ />
      <CTA />
    </main>
  );
}