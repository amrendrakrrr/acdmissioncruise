import Hero from "@/components/universities/Hero";
import Countries from "@/components/universities/Countries";
import UniversityGrid from "@/components/universities/UniversityGrid";
import AdmissionProcess from "@/components/universities/AdmissionProcess";
import FAQ from "@/components/universities/FAQ";
import CTA from "@/components/universities/CTA";

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Countries />
      <UniversityGrid />
      <AdmissionProcess />
      <FAQ />
      <CTA />
    </main>
  );
}