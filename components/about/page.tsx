import AboutHero from "@/app/about/AboutHero";
import MissionSection from "@/app/about/MissionSection";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export default function AboutPage() {
  return (
    <>
    <Header />
      <AboutHero />
      <MissionSection />
      <Footer />
    </>
  );
}