import styled from 'styled-components';

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

const PriceRange = ({ min, max, values, onChange }) => {
  const [minValue, maxValue] = values;

  const handleMinChange = e => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    onChange([value, maxValue]);
  };

  const handleMaxChange = e => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    onChange([minValue, value]);
  };

  const leftPercentage = ((minValue - min) / (max - min)) * 100;
  const rightPercentage = ((maxValue - min) / (max - min)) * 100;

  return (
    <StyledRangeWrapper>
      <StyledRangeTrack />
      <StyledRangeHighlight $left={leftPercentage} $right={rightPercentage} />
      <StyledRangeInput
        min={min}
        max={max}
        value={minValue}
        onChange={handleMinChange}
        style={{ zIndex: minValue === maxValue ? 1 : 2 }}
      />
      <StyledRangeInput
        min={min}
        max={max}
        value={maxValue}
        onChange={handleMaxChange}
        style={{ zIndex: minValue === maxValue ? 2 : 1 }}
      />
    </StyledRangeWrapper>
  );
};

export default PriceRange;
