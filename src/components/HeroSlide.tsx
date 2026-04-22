import React, { useState, useEffect } from "react";

interface HeroSlideProps {
  title: string;
  price: string;
  description: string;
  shoeImage: string;
  backgroundImage: string;
  onBuyNow?: () => void;
  animating: boolean;
  direction: "next" | "prev";
  role?: "incoming" | "outgoing";
}

export default function HeroSlide({
  title,
  price,
  description,
  shoeImage,
  backgroundImage,
  animating,
  direction,
  role = "incoming",
}: HeroSlideProps) {
  const [isInitial, setIsInitial] = useState(role === "incoming");

  useEffect(() => {
    if (isInitial) {
      const t = setTimeout(() => setIsInitial(false), 2700);
      return () => clearTimeout(t);
    }
  }, []);

  const from = direction === "next" ? "right" : "left";
  const to = direction === "next" ? "left" : "right";

  const enterFrom = isInitial ? "right" : from;
  const shouldAnimate = animating || isInitial;

  const layerStyle = (layer: "bg" | "shoe" | "title"): React.CSSProperties => {
    if (!shouldAnimate || role === "outgoing") return {};
    const delay =
      layer === "bg" ? "0ms" : layer === "shoe" ? "1000ms" : "2000ms";
    return { animationDelay: delay };
  };

  // On initial load, bg gets no animation class at all
  const bgAnimClass = isInitial
    ? ""
    : animating
    ? role === "incoming"
      ? `layer-enter-from-${from}-bg`
      : `layer-exit-to-${to}-bg`
    : "";

  return (
    <div
      className={`hero__slide ${
        role === "outgoing" ? `layer-exit-to-${to}` : ""
      }`}
    >

      <div
        className={`hero__layer hero__layer--bg ${bgAnimClass}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          ...(isInitial ? {} : layerStyle("bg")),
          transform: "scale(1.08)",
        }}
      />

      {/* Solid title — behind shoe (z-index: 2) */}
      <div
        className={`hero__title-wrapper ${
          shouldAnimate && role === "incoming"
            ? `layer-enter-from-${enterFrom}`
            : ""
        }`}
        style={{
          ...layerStyle("title"),
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <h1 className="hero__title hero__title--solid">{title}</h1>
      </div>

      <div
        className={`hero__shoe-wrapper ${
          shouldAnimate && role === "incoming"
            ? `layer-enter-from-${enterFrom}`
            : ""
        }`}
        style={{ ...layerStyle("shoe"), zIndex: 3 }}
      >
        <img src={shoeImage} alt={title} className="hero__shoe" />
      </div>

      <div
        className={`hero__title-wrapper ${
          shouldAnimate && role === "incoming"
            ? `layer-enter-from-${enterFrom}`
            : ""
        }`}
        style={{
          ...layerStyle("title"),
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      >
        <h1 className="hero__title hero__title--outline" aria-hidden="true">
          {title}
        </h1>
      </div>

      <div className="hero__info">
        <div className="hero__info-left">
          <span className="hero__price">{price}</span>
          <p
            className="hero__description"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.55)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}