import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  setTypeFilter,
  setColorFilter,
  setColorShadeFilter,
  setFormatFilter,
  resetFilters,
  selectTypeFilter,
  selectColorFilter,
  selectColorShadeFilter,
  selectFormatFilter,
  selectPriceFilter,
} from '../redux/slices/filterSlice';
import styled from 'styled-components';
import PriceRange from './PriceRange';

const CatalogSort = styled.div`
  background-color: #00000033;
  border: none;
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100rem;
`;

const CatalogSortTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
  margin-bottom: 0.8rem;
`;

const CatalogSortButton = styled.button`
  width: 22.3rem;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  padding: 1.6rem;
  cursor: pointer;

  &:hover {
    border: none;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
    transition: 0.4s ease;
  }
`;

const CatalogSortLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
`;

const CatalogSortInput = styled.input`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  background-color: transparent;
  border: 0.5px solid #fff;
  border-radius: 0.2rem;
  margin-right: 0.6rem;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.mainColor};
    border: ${({ theme }) => theme.colors.mainColor};
  }
`;

const PriceSortText = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: #fff;
`;

const Filteres = () => {
  const [priceRange, setPriceRange] = useState([100, 900]);
  const dispatch = useDispatch();
  const typeFilter = useSelector(selectTypeFilter);
  const colorFilter = useSelector(selectColorFilter);
  const colorShadeFilter = useSelector(selectColorShadeFilter);
  const formatFilter = useSelector(selectFormatFilter);
  const priceFilter = useSelector(selectPriceFilter);

  console.log('Type filter:', colorFilter);

  const handleCheckboxChange = (filterType, value) => {
    const currentFilter = {
      flowerType: typeFilter,
      flowerColor: colorFilter,
      colorShade: colorShadeFilter,
      format: formatFilter,
    }[filterType];

    const updateFilter = currentFilter.includes(value)
      ? currentFilter.filter(item => item !== value)
      : [...currentFilter, value];

    dispatch(
      {
        flowerType: setTypeFilter,
        flowerColor: setColorFilter,
        colorShade: setColorShadeFilter,
        format: setFormatFilter,
      }[filterType](updateFilter),
    );
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <CatalogSort>
      <div>
        <CatalogSortTitle>За відтінком</CatalogSortTitle>
        {['Ніжний', 'Яскравий'].map(shade => (
          <CatalogSortLabel
            key={shade}
            style={{
              display: 'block',
              margin: '0.5rem 0',
            }}
          >
            <CatalogSortInput
              type="checkbox"
              name="colorShade"
              value={shade}
              checked={colorShadeFilter.includes(shade)}
              onChange={() => handleCheckboxChange('colorShade', shade)}
            />
            {shade}
          </CatalogSortLabel>
        ))}
      </div>
      <div>
        <CatalogSortTitle>За кольором</CatalogSortTitle>
        {[
          'Червоний',
          'Жовтий',
          'Білий',
          'Рожевий',
          'Синій',
          'Фіолетовий',
          'Зелений',
          'Помаранчевий',
          'Кремовий',
        ].map(color => (
          <CatalogSortLabel
            key={color}
            style={{ display: 'block', margin: '0.5rem 0' }}
          >
            <CatalogSortInput
              type="checkbox"
              name="flowerColor"
              value={color}
              checked={colorFilter.includes(color)}
              onChange={() => handleCheckboxChange('flowerColor', color)}
            />
            {color}
          </CatalogSortLabel>
        ))}
      </div>
      <div>
        <CatalogSortTitle>За форматом</CatalogSortTitle>
        {[
          'Букет',
          'В корзині',
          'У вазі',
          'В коробці',
          'У ящику',
          'В конверті',
        ].map(format => (
          <CatalogSortLabel
            key={format}
            style={{ display: 'block', margin: '0.5rem 0' }}
          >
            <CatalogSortInput
              type="checkbox"
              name="format"
              value={format}
              checked={formatFilter.includes(format)}
              onChange={() => handleCheckboxChange('format', format)}
            />
            {format}
          </CatalogSortLabel>
        ))}
      </div>
      <div>
        <CatalogSortTitle>Вартість</CatalogSortTitle>
        <PriceRange
          min={0}
          max={1000}
          values={priceFilter}
          onChange={newRange => dispatch(setPriceRange(newRange))}
        />
        <PriceSortText>
          <br />
          Ціна: {priceRange[0]} грн - {priceRange[1]} грн
        </PriceSortText>
      </div>
      <div>
        <CatalogSortTitle>За квіткою</CatalogSortTitle>
        {[
          'Троянди',
          'Тюльпани',
          'Орхідеї',
          'Гортензії',
          'Півонії',
          'Кали',
          'Хризантеми',
          'Еустоми',
          'Гвоздики',
          'Іриси',
        ].map(flower => (
          <CatalogSortLabel
            key={flower}
            style={{ display: 'block', margin: '0.5rem 0' }}
          >
            <CatalogSortInput
              type="checkbox"
              name="flowerType"
              value={flower}
              checked={typeFilter.includes(flower)}
              onChange={() => handleCheckboxChange('flowerType', flower)}
            />
            {flower}
          </CatalogSortLabel>
        ))}
      </div>
      <CatalogSortButton onClick={handleResetFilters}>
        Скинути фільтр
      </CatalogSortButton>
    </CatalogSort>
  );
};

export default Filteres;
