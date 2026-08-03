import Hero from "@/components/about/Hero";
import Team from "@/components/about/Team";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Stats from "@/components/about/Stats";
import Testimonials from "@/components/about/Testimonials";
import CTA from "@/components/about/CTA";

export default function AboutPage() {
  return (
    <>
      <Hero />

      {/* Leadership Section */}
      <Team />

      {/* Company Story */}
      <OurStory />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core Values */}
      <Values />

      {/* Why Choose AdmissionCruise */}
      <WhyChooseUs />

      {/* Statistics */}
      <Stats />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CTA />
    </>
  );
}