import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import TopUniversities from "@/components/home/TopUniversities";
import PopularCourses from "@/components/home/PopularCourses";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Testimonials from "@/components/home/Testimonials";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
    <Header />
      <HeroSection />
      <TrustBar />
      <TopUniversities />
      <PopularCourses />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}