import Hero from "@/components/study-india/Hero";
import Stats from "@/components/study-india/Stats";
import PopularCourses from "@/components/study-india/PopularCourses";
import TopUniversities from "@/components/study-india/TopUniversities";
import WhyChoose from "@/components/study-india/WhyChoose";
import AdmissionProcess from "@/components/study-india/AdmissionProcess";
import Scholarship from "@/components/study-india/Scholarship";
import Testimonials from "@/components/study-india/Testimonials";
import FAQ from "@/components/study-india/FAQ";
import CTA from "@/components/study-india/CTA";

export default function StudyIndiaPage() {
  return (
    <main>
      <Hero />
      <Stats />
      <PopularCourses />
      <TopUniversities />
      <WhyChoose />
      <AdmissionProcess />
      <Scholarship />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}