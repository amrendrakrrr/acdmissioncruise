import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://admissioncruise.com"),
  title: {
    default: "AdmissionCruise | University Admission & Study Abroad Guidance",
    template: "%s | AdmissionCruise",
  },
  description: "Explore university admissions in India and study abroad options with AdmissionCruise. Get course guidance and request a free counselling session.",
  openGraph: {
    type: "website",
    url: "https://admissioncruise.com",
    siteName: "AdmissionCruise",
    title: "AdmissionCruise | University Admission & Study Abroad Guidance",
    description: "Explore admissions in India and abroad and request free counselling.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
