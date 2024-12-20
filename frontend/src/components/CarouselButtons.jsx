export const NextArrow = ({ onClick }) => (
  <button className="bestsellers__btn next" onClick={onClick}>
    <svg
      width="80"
      height="6"
      viewBox="0 0 80 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 3L75 0.113249V5.88675L80 3ZM0 3.5L75.5 3.5V2.5L0 2.5L0 3.5Z"
        fill="#43FFD2"
      />
    </svg>
  </button>
);

export const PrevArrow = ({ onClick }) => (
  <button
    className="bestsellers__btn bestsellers__btn-arrleft prev"
    onClick={onClick}
  >
    <svg
      width="80"
      height="6"
      viewBox="0 0 80 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 3L75 0.113249V5.88675L80 3ZM0 3.5L75.5 3.5V2.5L0 2.5L0 3.5Z"
        fill="#43FFD2"
      />
    </svg>
  </button>
);
