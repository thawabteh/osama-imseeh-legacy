import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ValuesSection from "@/components/ValuesSection";
import QuoteSection from "@/components/QuoteSection";
import BooksSection from "@/components/BooksSection";
import VideoSection from "@/components/VideoSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SectionDivider variant="fade" />
      <StatsSection />
      <SectionDivider variant="ornament" />
      <AboutSection />
      <SectionDivider variant="ornament" />
      <AchievementsSection />
      <SectionDivider variant="fade" />
      <ValuesSection />
      <QuoteSection />
      <SectionDivider variant="fade" />
      <BooksSection />
      <SectionDivider variant="ornament" />
      <VideoSection />
      <SectionDivider variant="fade" />
      <BlogSection />
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
