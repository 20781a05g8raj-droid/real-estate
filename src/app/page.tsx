import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchFilter from "@/components/SearchFilter";
import FeaturedProperties from "@/components/FeaturedProperties";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <Navbar />
      <Hero />
      <SearchFilter />
      <FeaturedProperties />
      <Stats />
      <WhyUs />
      <Insights />
      <Testimonials />
      <ContactSection />
      <CTA />
      <Footer />
    </main>
  );
}
