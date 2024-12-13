import NavigationBar from "../global/components/navigation-bar";
import FacilitiesSection from "../cricket/components/facility-hilights-section";
import PadelInitiationSection from "../cricket/components/initiation-section";
import HeroSection from "../cricket/components/hero-section";
import PadelForWomen from "./components/women-section";
import BookingSteps from "../global/components/booking-steps-section";
import PadelGallery from "./components/cricket-gallery-section";
import ContactForm from "../global/components/contact-us-section";
export default function Cricket() {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <FacilitiesSection />
            <PadelInitiationSection />
            <PadelForWomen />
            <BookingSteps />
            <PadelGallery />
            <ContactForm />
        </div>
    );
}