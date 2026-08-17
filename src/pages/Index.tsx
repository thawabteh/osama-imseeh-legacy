import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroQuoteSection from "@/components/IntroQuoteSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import StudiesSection from "@/components/StudiesSection";
import QuoteSection from "@/components/QuoteSection";
import BooksSection from "@/components/BooksSection";
import VideosSection from "@/components/VideosSection";
import VideoSection from "@/components/VideoSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import { useDocumentTitle } from "@/lib/use-document-title";

const Index = () => {
  useDocumentTitle();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SectionDivider variant="fade" />
      <IntroQuoteSection />
      <SectionDivider variant="ornament" />
      <AboutSection />
      <SectionDivider variant="ornament" />
      <AchievementsSection />
      <SectionDivider variant="ornament" />
      <StudiesSection />
      <SectionDivider variant="fade" />
      <QuoteSection />
      <SectionDivider variant="fade" />
      <BooksSection />
      <SectionDivider variant="ornament" />
      <VideosSection />
      <SectionDivider variant="ornament" />
      <VideoSection />
      <SectionDivider variant="ornament" />
      <GallerySection />
      <SectionDivider variant="fade" />
      <ContactSection />
      <SectionDivider variant="ornament" />
      <Footer />
    </div>
  );
};

export default Index;
