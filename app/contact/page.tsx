import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";
import Map from "@/components/contact/Map";
import CTA from "@/components/contact/CTA";

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ContactForm />
      <ContactInfo />
      <FAQ />
      <Map />
      <CTA />
    </main>
  );
}