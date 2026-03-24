import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import QuoteSection from "@/components/QuoteSection";
import LibrarySection from "@/components/LibrarySection";
import VideoSection from "@/components/VideoSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen teal-gradient-bg">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ValuesSection />
      <QuoteSection />
      <LibrarySection />
      <VideoSection />
      <BlogSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
