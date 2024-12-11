import NavigationBar from "../global/components/navigation-bar";
import FacilitiesSection from "../padel/components/facility-hilights-section";
import PadelInitiationSection from "../padel/components/initiation-section";
import HeroSection from "../padel/components/hero-section";
import PadelForWomen from "./components/women-section";
export default function Padel() {
    return (
        <div>
            <NavigationBar />
            <HeroSection />
            <FacilitiesSection />
            <PadelInitiationSection />
            <PadelForWomen />
        </div>
    );
}