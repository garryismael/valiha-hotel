import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="flex justify-between items-center">
      <div className="w-[46%] flex flex-col gap-8">
        <h1 className="text-7xl">Bienvenue à Valiha Hôtel</h1>
        <p className="text-medium w-[88%]">
          Découvrez le confort ultime dans un cadre magnifique.
          <br />
          Nous vous invitons à vivre une expérience inoubliable dans notre hôtel
          de luxe. Que vous soyez en voyage d'affaires, en vacances en famille,
          nous avons tout ce dont vous avez besoin pour rendre votre séjour
          mémorable.
        </p>
        <div className="flex gap-4">
          <button className="btn-orange">Réserver maintenant</button>
          <button className="btn btn-outline-orange">Contactez-nous</button>
        </div>
      </div>
      <div className="relative w-[500px] h-[750px]">
        <Image
          alt="hero image"
          src="/assets/img/valiha.webp"
          fill={true}
          className="object-cover rounded-tl-full rounded-tr-full"
        />
      </div>
    </section>
  );
};
