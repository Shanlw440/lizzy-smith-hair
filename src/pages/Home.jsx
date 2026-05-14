import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesPreview from "../components/home/ServicesPreview";
import MyWorkSection from "../components/home/MyWorkSection";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <MyWorkSection />
      <ContactSection />
    </>
  );
}