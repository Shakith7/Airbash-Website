import FacilitiesSection from './components/facilities-section';
import NavigationBar from '../../global/components/navigation-bar'
import WhatsOnOffer from './components/offers-section';
import HeroSection from './components/hero-section';
import SocialEventsSection from './components/social-events-section';
import GallerySection from './components/gallery-section';
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