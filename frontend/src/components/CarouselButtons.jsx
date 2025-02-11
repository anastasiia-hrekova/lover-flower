import styled from 'styled-components';

const CarouselBtn = styled.button`
  ${({ theme }) => theme.mixins.flex};
  background-color: transparent;
  cursor: pointer;
  border: none;

  &:disabled {
    cursor: default;
    filter: grayscale(1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const PrevBtn = styled(CarouselBtn)`
  transform: rotate(-180deg);
`;

export const NextArrow = ({ onClick, disabled }) => (
  <CarouselBtn onClick={onClick} disabled={disabled}>
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
  </CarouselBtn>
);

export const PrevArrow = ({ onClick, disabled }) => (
  <PrevBtn onClick={onClick} disabled={disabled}>
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
  </PrevBtn>
);
