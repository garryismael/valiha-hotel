import Image from "next/image";
import styles from './index.module.css';
import CheckAvailability from "../CheckAvailability";

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
      <div className={styles.form}>
        <CheckAvailability />
      </div>
    </section>
  );
};
