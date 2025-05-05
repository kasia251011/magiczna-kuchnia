import HeroSection from "@/sections/HeroSection";
import ServiceSection from "@/sections/ServiceSection";
import OfferSection from "@/sections/OfferSection";
import GallerySection from "@/sections/GallerySection";
import FooterSection from "@/sections/FooterSection";
import Navbar from "@/components/Navbar";

const Page = () => (
  <>
    <Navbar />
    <HeroSection />
    <ServiceSection />
    <OfferSection />
    <GallerySection />
    <FooterSection />
  </>
);

export default Page;
