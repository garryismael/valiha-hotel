import CheckAvailability from "@/components/CheckAvailability";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <CheckAvailability/>
    </div>
  );
}
