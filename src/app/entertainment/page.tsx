import WhyAirbash from "../about-us/components/why-airbash-section";
import NavigationBar from "../global/components/navigation-bar";
import Footer from "../global/components/footer-section";
import PricingSection from "./components/entertainment-pricing-section";
import ContactSection from "../global/components/contact-us-section";
import TestimonialCarousel from "./components/testemonials-section";

export default function EntertainmentPage() {
    return (
        <div>
            <NavigationBar />
            <WhyAirbash />
            <PricingSection />
            <TestimonialCarousel />
            <ContactSection />
            <Footer />
        </div>
    );
}