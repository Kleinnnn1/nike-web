import { useState, useEffect, useRef } from "react";
import HeroSlide from "./components/HeroSlide";
import { slides } from "./data/slides";
import "./index.css";
import Navbar from "./components/Navbar";
import SliderControls from "./components/SlideControls";
import nikeLogo from "./assets/logo.png";

export const TRANSITION_MS = 2700;
const AUTOPLAY_MS = 6000;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const urls = slides.flatMap((s) => [s.backgroundImage, s.shoeImage]);
    let loadedCount = 0;

    // Images only ever push progress up to 95% — the final 5% is reserved
    // for the "everything's actually ready" jump to 100 right before reveal.
    const bump = () => {
      loadedCount++;
      const pct = Math.min(95, Math.round((loadedCount / urls.length) * 95));
      setProgress((prev) => Math.max(prev, pct));

      if (loadedCount === urls.length) {
        setProgress(100);
        // brief pause so the 100% state is visible before the app appears
        setTimeout(() => setLoaded(true), 350);
      }
    };

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = img.onerror = bump;
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
    }, TRANSITION_MS);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const nextSlide = () => goTo((current + 1) % slides.length);

  // Keyboard navigation: left/right arrows move between slides.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, animating]);

  // Autoplay: advance automatically, pausing on hover/focus so visitors
  // reading the description text aren't interrupted mid-read.
  const autoplayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (paused || animating || !loaded) return;
    autoplayTimer.current = setTimeout(nextSlide, AUTOPLAY_MS);
    return () => {
      if (autoplayTimer.current) clearTimeout(autoplayTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, animating, paused, loaded]);

  if (!loaded) {
    return (
      <div className="loading-screen">
        <img src={nikeLogo} alt="Nike" className="loading-logo" />
        <div className="loading-bar">
          <div
            className="loading-bar__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="loading-percent">{progress}%</span>
      </div>
    );
  }

  return (
    <div
      className="app"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Navbar currentIndex={next ?? current} onDotClick={goTo} />
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
