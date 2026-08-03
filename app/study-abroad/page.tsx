import Hero from "@/components/study-abroad/Hero";
import Countries from "@/components/study-abroad/Countries";
import WhyStudyAbroad from "@/components/study-abroad/WhyStudyAbroad";
import TopUniversities from "@/components/study-abroad/TopUniversities";
import PopularCourses from "@/components/study-abroad/PopularCourses";
import AdmissionProcess from "@/components/study-abroad/AdmissionProcess";
import Scholarships from "@/components/study-abroad/Scholarships";
import Testimonials from "@/components/study-abroad/Testimonials";
import FAQ from "@/components/study-abroad/FAQ";
import CTA from "@/components/study-abroad/CTA";

export default function StudyAbroadPage() {
  return (
    <main>
      <Hero />
      <Countries />
      <WhyStudyAbroad />
      <TopUniversities />
      <PopularCourses />
      <AdmissionProcess />
      <Scholarships />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}