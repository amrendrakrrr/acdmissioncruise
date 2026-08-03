import Hero from "@/components/scholarships/Hero";
import ScholarshipTypes from "@/components/scholarships/ScholarshipTypes";
import ScholarshipGrid from "@/components/scholarships/ScholarshipGrid";
import ApplicationProcess from "@/components/scholarships/ApplicationProcess";
import FAQ from "@/components/scholarships/FAQ";
import CTA from "@/components/scholarships/CTA";

export const metadata = {
  title: "Scholarships | AdmissionCruise",
  description:
    "Explore scholarships, financial aid, and funding opportunities for higher education in India and abroad with AdmissionCruise.",
};

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <ScholarshipTypes />
      <ScholarshipGrid />
      <ApplicationProcess />
      <FAQ />
      <CTA />
    </main>
  );
}