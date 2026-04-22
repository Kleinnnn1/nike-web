import { useState } from "react";
import HeroSlide from "./components/HeroSlide";
import { slides } from "./data/slides";
import "./index.css";
import SliderControls from "./components/SlideControls";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    const dir = index > current ? "next" : "prev";
    setDirection(dir);
    setNext(index);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setNext(null);
      setAnimating(false);
    }, 2700);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const nextSlide = () => goTo((current + 1) % slides.length);

  return (
    <div className="app">
      <main className="hero">
        {animating && (
          <HeroSlide
            {...slides[current]}
            animating={true}
            direction={direction}
            role="outgoing"
          />
        )}
        <HeroSlide
          {...slides[next ?? current]}
          animating={animating}
          direction={direction}
          role="incoming"
        />
        <SliderControls onPrev={prev} onNext={nextSlide} />
      </main>
    </div>
  );
}