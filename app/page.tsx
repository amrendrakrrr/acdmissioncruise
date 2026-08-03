import Hero from "@/components/hero/Hero";
import Stats from "@/components/sections/Stats";
import Trusted from "@/components/sections/Trusted";
import Services from "@/components/sections/Services";
import Universities from "@/components/sections/Universities";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import Counselling from "@/components/sections/Counselling";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Trusted />
      <Services />
      <Universities />
      <WhyChoose />
      <Testimonials />
      <Counselling />
    </>
  );
}