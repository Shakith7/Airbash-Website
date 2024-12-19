import NavigationBar from "../global/components/navigation-bar";
import AboutUsSection from "./components/hero-section";
import Footer from "../global/components/footer-section";
import ContactSection from "../global/components/contact-us-section";
import FounderQuote from "./components/founder-quote-section";
import MeetTheTeam from "./components/meet-the-team-section";
import WhyAirbash from "./components/our-cause-section";

export default function AboutUs() {
    return (
        <div>
            <NavigationBar />
            <AboutUsSection />
            <FounderQuote />
            <MeetTheTeam />
            <WhyAirbash />
            <ContactSection />
            <Footer />
        </div>
    );
}