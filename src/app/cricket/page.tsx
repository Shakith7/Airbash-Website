import NavigationBar from "../global/components/navigation-bar";
import FacilitiesSection from "./components/facility-hilights-section";
import PadelInitiationSection from "./components/initiation-section";
import CricketHeroSection from "./components/hero-section";
import PadelForWomen from "./components/women-section";
import BookingSteps from "../global/components/booking-steps-section";
import PadelGallery from "./components/cricket-gallery-section";
import ContactForm from "../global/components/contact-us-section";
import Footer from "../global/components/footer-section";
export default function Cricket() {
    return (
        <div>
            <NavigationBar />
            <CricketHeroSection />
            <FacilitiesSection />
            <PadelInitiationSection />
            <PadelForWomen />
            <BookingSteps />
            <PadelGallery />
            <ContactForm />
            <Footer />
        </div>
    );
}