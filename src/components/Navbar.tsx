import { slides } from "../data/slides";

interface NavbarProps {
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export default function Navbar({ currentIndex, onDotClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
      </div>
      <div className="navbar__dots" role="tablist" aria-label="Slides">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            className={`navbar__dot ${i === currentIndex ? "navbar__dot--active" : ""}`}
            onClick={() => onDotClick(i)}
          />
        ))}
      </div>
    </nav>
  );
}
