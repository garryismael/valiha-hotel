import React from "react";
import {
  FaBuilding,
  FaEye,
  FaFan,
  FaMap,
  FaShower,
  FaWifi,
} from "react-icons/fa";
import ChoiceCard from "../ChoiceCard";

const ChoiceList = () => {
  return (
    <div className="flex items-center flex-wrap justify-between content-between gap-4">
      {choices.map((choice) => (
        <ChoiceCard key={choice.id} {...choice} />
      ))}
    </div>
  );
};

const choices = [
  {
    id: 1,
    Icon: FaBuilding,
    title: "Immeuble entièrement neuf et moderne",
    paragraph:
      "Tout l'immeuble est entièrement neuf avec un style moderne dans tout l'enceinte tant à l'extérieur qu'à l'intérieur des chambres.",
  },
  {
    id: 2,
    Icon: FaFan,
    title: "Chambres confortables avec climatisation",
    paragraph:
      "Toutes nos chambres sont équipées d'un climatiseur de qualité pour vous offrir des séjours agréables en hiver comme en été.",
  },
  {
    id: 3,
    Icon: FaEye,
    title: "Terrasse avec une vue magnifique",
    paragraph:
      "Une terrasse avec une vue imprenable pour vous permettre d'admirer le coucher du soleil pour bien finir la journée.",
  },
  {
    id: 4,
    Icon: FaWifi,
    title: "Connexion internet à haut débit (fibre optique)",
    paragraph:
      "Une connexion internet à haut débit est à votre disposition avec la fibre optique pour vous permettre d'être connectés en permanence.",
  },
  {
    id: 5,
    Icon: FaShower,
    title: "Douche avec eau chaude disponible 24 / 7",
    paragraph:
      "Equipées de douche avec eau chaude, toutes nos chambres remplissent les critères pour vous offrir des séjours relaxants.",
  },
  {
    id: 6,
    Icon: FaMap,
    title: "Emplacement en centre-ville (facilité d'accès)",
    paragraph:
      "Situé en plein centre ville, l'accès est facile et vous serez à quelques mètres des centres commerciaux pour faire du shopping.",
  },
];

export default ChoiceList;
