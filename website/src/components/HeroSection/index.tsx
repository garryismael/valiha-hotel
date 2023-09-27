import Image from "next/image";
import CheckAvailability from "@/components/CheckAvailability";

export const HeroSection = () => {
  return (
    <section className="relative h-screen">
      <div className="relative h-[90vh]">
        <Image
          src="/assets/img/hero-slide-room.webp"
          fill={true}
          alt="room"
          className="object-cover"
        />
      </div>
      <CheckAvailability />
    </section>
  );
};
