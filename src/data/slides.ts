import shoe1 from "../assets/images/shoe-1.png";
import shoe2 from "../assets/images/shoe-2.png";
import shoe3 from "../assets/images/shoe-3.png";

import bg1 from "../assets/images/bg-1.png";
import bg2 from "../assets/images/bg-2.png";
import bg3 from "../assets/images/bg-3.png";

export interface Slide {
  id: number;
  title: string;
  price: string;
  description: string;
  shoeImage: string;
  backgroundImage: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "NIKE Adapt BB 2.0",
    price: "$850",
    description:
      "Upgrade your game with the Nike Adapt BB 2.0 — an advanced evolution of the original, featuring improved FitAdapt lacing, enhanced court feel, and a redesigned upper for better stability and performance.",
    shoeImage: shoe3,
    backgroundImage: bg3,
  },
  {
    id: 2,
    title: "NIKE ADAPT BB",
    price: "$1,200",
    description:
      "Experience the Nike Adapt BB — a futuristic self-lacing basketball shoe powered by FitAdapt technology, delivering a personalized fit, app-controlled adjustments, and responsive cushioning for peak performance.",
    shoeImage: shoe2,
    backgroundImage: bg2,
  },
  {
    id: 3,
    title: "NIKE EQT SUPPORT",
    price: "$980",
    description:
      "Step into the Nike EQT Support — a retro-inspired sneaker combining modern comfort with classic running DNA, featuring responsive cushioning and a sleek, street-ready design.",
    shoeImage: shoe1,
    backgroundImage: bg1,
  },
];
