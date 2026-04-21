import infinityLogo from "../assets/images/infi-logo.png";
import { slides } from "../data/slides";

interface NavbarProps {
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export default function Navbar({ currentIndex, onDotClick }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={infinityLogo} alt="Logo" />
      </div>
      <div className="navbar__dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`navbar__dot ${i === currentIndex ? "navbar__dot--active" : ""}`}
            onClick={() => onDotClick(i)}
          />
        ))}
      </div>
    </nav>
  );
}