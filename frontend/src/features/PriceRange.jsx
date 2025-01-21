import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setPriceFilter } from '../redux/slices/filterSlice';

const StyledRangeWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledRangeTrack = styled.div`
  position: absolute;
  height: 0.1rem;
  background: #fff;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
`;

const StyledRangeHighlight = styled.div`
  position: absolute;
  height: 0.1rem;
  background: #fff;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ $left }) => $left}%;
  right: ${({ $right }) => $right}%;
`;

const StyledRangeInput = styled.input.attrs({ type: 'range' })`
  -webkit-appearance: none;
  width: 100%;
  height: 0.1rem;
  background: transparent;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.mainColor};
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.mainColor};
      transform: scale(1.1);
    }
  }
  
  }
`;

const PriceFilter = ({ priceRange }) => {
  const dispatch = useDispatch();

  const handleMinChange = e => {
    dispatch(setPriceFilter({ min: Number(e.target.value) }));
  };

  const handleMaxChange = e => {
    dispatch(setPriceFilter({ max: Number(e.target.value) }));
  };

  return (
    <StyledRangeWrapper>
      <StyledRangeTrack />
      <StyledRangeHighlight $left={priceRange.min} $right={priceRange.max} />
      <StyledRangeInput
        type="range"
        min={0}
        max={2000}
        step="10"
        value={priceRange.min}
        onChange={handleMinChange}
      />
      <StyledRangeInput
        type="range"
        min={0}
        max={2000}
        step="10"
        value={priceRange.max}
        onChange={handleMaxChange}
      />
    </StyledRangeWrapper>
  );
};

export default PriceFilter;
