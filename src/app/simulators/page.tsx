import NavigationBar from "../global/components/navigation-bar";
import FacilitiesSection from "./components/facility-hilights-section";
import PadelInitiationSection from "./components/initiation-section";
import HeroSection from "./components/hero-section";
// import PadelForWomen from "./components/women-section";
import BookingSteps from "../global/components/booking-steps-section";
import SimulatorGallery from "./components/simulator-gallery-section";
import ContactForm from "../global/components/contact-us-section";
import Footer from "../global/components/footer-section";
export default function Simulators() {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <FacilitiesSection />
            <PadelInitiationSection />
            {/* <PadelForWomen /> */}
            <BookingSteps />
            <SimulatorGallery />
            <ContactForm />
            <Footer />
        </div>
    );
}