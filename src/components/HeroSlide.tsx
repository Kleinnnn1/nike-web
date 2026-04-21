interface HeroSlideProps {
  title: string;
  price: string;
  description: string;
  shoeImage: string;
  backgroundImage: string;
  onBuyNow?: () => void;
  theme: "light" | "dark";
}

export default function HeroSlide({
  title,
  price,
  description,
  shoeImage,
  backgroundImage,
  onBuyNow,
  theme
}: HeroSlideProps) {
  return (
    <div className={`hero__slide hero__slide--${theme}`} style={{ backgroundImage: `url(${backgroundImage})` }}>

      {/* Layer 1 — solid text BEHIND shoe */}
      <h1 className="hero__title hero__title--solid">{title}</h1>

      {/* Layer 2 — shoe in the middle */}
      <div className="hero__shoe-wrapper">
        <img src={shoeImage} alt={title} className="hero__shoe" />
      </div>

      {/* Layer 3 — outline text IN FRONT of shoe */}
      <h1 className="hero__title hero__title--outline" aria-hidden="true">{title}</h1>

      <div className="hero__info">
        <div className="hero__info-left">
          <span className="hero__price">{price}</span>
          <p className="hero__description">{description}</p>
        </div>
      </div>
    </div>
  );
}