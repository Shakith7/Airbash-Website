import NavigationBar from "../global/components/navigation-bar";
import ContactSection from "../global/components/contact-us-section";
import Footer from "../global/components/footer-section";
import PricingSection from "./components/packages-section";

export default function Membership() {
    return (
        <div>
            <NavigationBar />
            <PricingSection />
            <ContactSection />
            <Footer />
        </div>
    );
}