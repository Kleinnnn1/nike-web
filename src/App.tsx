import { useState, useEffect } from "react";
import HeroSlide from "./components/HeroSlide";
import { slides } from "./data/slides";
import "./index.css";
import SliderControls from "./components/SlideControls";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "a") {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const urls = slides.flatMap((s) => [s.backgroundImage, s.shoeImage]);
    let loadedCount = 0;

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === urls.length) {
          setLoaded(true);
        }
      };
    });
  }, []);

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

  if (!loaded) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner" />
      </div>
    );
  }

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
