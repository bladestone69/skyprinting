import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhySection from "@/components/why-section";
import ModelsSection from "@/components/models-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="min-h-screen bg-[oklch(0.12_0.015_240)]">
      <HeroSection />
      <ServicesSection />
      <WhySection />
      <ModelsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
