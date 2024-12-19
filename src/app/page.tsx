import FacilitiesSection from './homepage/components/facilities-section';
import NavigationBar from './global/components/navigation-bar';
import WhatsOnOffer from './homepage/components/offers-section';
import HeroSection from './homepage/components/hero-section';
import SocialEventsSection from './homepage/components/social-events-section';
import GallerySection from './homepage/components/gallery-section';
import Footer from './global/components/footer-section';
const HomePage = () => {
  return (
    <div>
        <NavigationBar />
        <HeroSection />
        <FacilitiesSection />
        <WhatsOnOffer />
        <SocialEventsSection />
        <GallerySection />
      {/* <EventsSection />
      <TestimonialsSection />
      <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default HomePage;