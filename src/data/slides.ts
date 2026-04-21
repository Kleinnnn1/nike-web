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
  theme: "light" | "dark";
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "FUTURECRAFT 4D",
    price: "$980",
    description:
      "Shop the Adidas Futurecraft 4D — a limited-edition performance sneaker crafted with 3D-printed midsole technology for unmatched cushioning, precision fit, and next-generation style.",
    shoeImage: shoe1,
    backgroundImage: bg1,
    theme: "dark",
  },
  {
    id: 2,
    title: "NIKE ADAPT BB",
    price: "$1,200",
    description:
      "Buy the Nike Adapt BB — the self-lacing basketball shoe featuring FitAdapt power lace technology, real-time fit adjustments via app, and a responsive cushioning system built for elite performance.",
    shoeImage: shoe2,
    backgroundImage: bg2,
    theme: "light",
  },
  {
    id: 3,
    title: "LI-NING ESSENCE",
    price: "$850",
    description:
      "Discover the Li-Ning Essence — a premium lifestyle sneaker blending cutting-edge Chinese sportswear design with CloudFoam cushioning, offering bold aesthetics and all-day comfort.",
    shoeImage: shoe3,
    backgroundImage: bg3,
    theme: "dark",
  },
];