export const NextArrow = ({ onClick }) => (
  <button className="bestsellers__btn next" onClick={onClick}>
    <img src="/images/arrow.svg" alt="arrow" />
  </button>
);

export const PrevArrow = ({ onClick }) => (
  <button
    className="bestsellers__btn bestsellers__btn-arrleft prev"
    onClick={onClick}
  >
    <img src="/images/arrow.svg" alt="arrow" />
  </button>
);
