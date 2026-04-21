import { useState } from "react";
import HeroSlide from "./components/HeroSlide";
import { slides } from "./data/slides";
import "./index.css";
import Navbar from "./components/Navbar";
import SliderControls from "./components/SlideControls";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setDirection(index > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 700);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  const theme = slides[current].theme;

  return (
    <div className={`app app--${theme}`}>
      <Navbar currentIndex={current} onDotClick={goTo} />
      <main className="hero">
        <HeroSlide
          {...slides[current]}
          onBuyNow={() => alert("Added to cart!")}
          animating={animating}
          direction={direction}
        />
        <SliderControls onPrev={prev} onNext={next} />
      </main>
    </div>
  );
}