interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export default function SliderControls({ onPrev, onNext }: SliderControlsProps) {
  return (
    <>
      <button className="slider-btn slider-btn--prev" onClick={onPrev} aria-label="Previous">
        &#8249;
      </button>
      <button className="slider-btn slider-btn--next" onClick={onNext} aria-label="Next">
        &#8250;
      </button>
    </>
  );
}