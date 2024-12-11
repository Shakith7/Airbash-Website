import FacilitiesSection from './homepage/components/facilities-section';
import NavigationBar from './global/components/navigation-bar';
import WhatsOnOffer from './homepage/components/offers-section';
// import HeroSection from './homepage/hero-section';
import SocialEventsSection from './homepage/components/social-events-section';
import GallerySection from './homepage/components/gallery-section';
const HomePage = () => {
  return (
    <div>
        <NavigationBar />
        {/* <HeroSection /> */}
        <FacilitiesSection />
        <WhatsOnOffer />
        <SocialEventsSection />
        <GallerySection />
      {/* <EventsSection />
      <TestimonialsSection />
      <ContactSection /> */}
    </div>
  );
};

export default HomePage;