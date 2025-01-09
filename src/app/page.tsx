import BuyingProcess from "@/components/BuyingProcess";
import HeroSection from "@/components/HeroSection";
import LocationsSection from "@/components/LocationsSection";
import SearchSection from "@/components/SearchSection";
import StatsSection from "@/components/StatsSection";
import VerifiedSection from "@/components/VerifiedSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <SearchSection/>
      <StatsSection/>
      <LocationsSection/>
      <BuyingProcess/>
      <VerifiedSection/>
    </>
  );
}
