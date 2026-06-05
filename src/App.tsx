import { HeroSection } from "@/components/ui/feature-carousel";
import { SiteNav } from "@/components/SiteNav";
import { AboutSection } from "@/components/AboutSection";
import { StylesSection } from "@/components/StylesSection";
import { RepertoireSection } from "@/components/RepertoireSection";
import { TrainingSection } from "@/components/TrainingSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { SiteFooter } from "@/components/SiteFooter";
import { heroImages } from "@/data/ballet";
import { profile } from "@/data/profile";

function App() {
  const title = (
    <>
      Classical Ballet,{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose to-wine">
        Taught with Care
      </span>
    </>
  );

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main>
        <HeroSection
          title={title}
          subtitle={profile.pitchEn}
          images={heroImages}
        />

        <AboutSection />
        <StylesSection />
        <RepertoireSection />
        <TrainingSection />
        <FaqSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default App;
