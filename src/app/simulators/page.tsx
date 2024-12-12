import NavigationBar from "../global/components/navigation-bar";
import FacilitiesSection from "../padel/components/facility-hilights-section";
import PadelInitiationSection from "../padel/components/initiation-section";
import HeroSection from "../padel/components/hero-section";
import PadelForWomen from "./components/women-section";
import BookingSteps from "./components/booking-steps-section";
import PadelGallery from "./components/padel-gallery-section";
import ContactForm from "../global/components/contact-us-section";
export default function Padel() {
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