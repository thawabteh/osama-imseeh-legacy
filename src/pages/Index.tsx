import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import VideoSection from "@/components/VideoSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import QuoteSection from "@/components/QuoteSection";
import LibrarySection from "@/components/LibrarySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
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
