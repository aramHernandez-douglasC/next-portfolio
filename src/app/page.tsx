import AboutSection from "@/app/components/AboutSection";
import AchievementsSection from "@/app/components/AchievementsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import ProjectSection from "@/app/components/ProjectSection";
import ServicesComponent from "@/app/server-components/ServicesComponent"
import AboutComponent from "@/app/server-components/AboutComponent";

/*
TODO: Parts to build:
- Hero section
- Projects section
- Contact section
- AI conversation bot
- About me
- Resume download
- Blog


*/

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto ">
        <HeroSection />
        <AchievementsSection />
        <ServicesComponent /> 
        {/* <TechnologiesSection/> */}
        <ProjectSection />
        <AboutComponent />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
