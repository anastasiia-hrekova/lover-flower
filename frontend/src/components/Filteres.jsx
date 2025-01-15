import { useDispatch, useSelector } from 'react-redux';
import {
  setTypeFilter,
  setColorFilter,
  setColorShadeFilter,
  setFormatFilter,
  setPriceFilter,
  resetFilters,
  selectTypeFilter,
  selectColorFilter,
  selectColorShadeFilter,
  selectFormatFilter,
  selectPriceFilter,
} from '../redux/slices/filterSlice';
import styled from 'styled-components';

const CatalogSort = styled.div`
  background-color: #00000033;
  border: none;
  border-radius: 2rem;
  backdrop-filter: blur(2rem);
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 82rem;
`;

const CatalogSortTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
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

const Filteres = () => {
  const dispatch = useDispatch();
  const typeFilter = useSelector(selectTypeFilter);
  const colorFilter = useSelector(selectColorFilter);
  const colorShadeFilter = useSelector(selectColorShadeFilter);
  const formatFilter = useSelector(selectFormatFilter);
  const priceFilter = useSelector(selectPriceFilter);

  const handleCheckboxChange = (filterType, value, isChecked) => {
    const currentFilter = {
      type: typeFilter,
      color: colorFilter,
      colorShade: colorShadeFilter,
      format: formatFilter,
    }[filterType];

    const updateFilter = isChecked
      ? [...currentFilter, value]
      : currentFilter.filter(item => item !== value);

    const actions = {
      type: setTypeFilter,
      color: setColorFilter,
      colorShade: setColorShadeFilter,
      format: setFormatFilter,
    };

    dispatch(actions[filterType](updateFilter));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <CatalogSort>
      <div>
        <CatalogSortTitle>За відтінком</CatalogSortTitle>
        {['Ніжний', 'Яскравий'].map(shade => (
          <label key={shade} style={{ display: 'block', margin: '0.5rem 0' }}>
            <input
              type="checkbox"
              value={shade}
              checked={colorShadeFilter.includes(shade)}
              onChange={e =>
                handleCheckboxChange('colorShade', shade, e.target.checked)
              }
            />
            {shade}
          </label>
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
          <label key={color} style={{ display: 'block', margin: '0.5rem 0' }}>
            <input
              type="checkbox"
              value={color}
              checked={colorFilter.includes(color)}
              onChange={e =>
                handleCheckboxChange('color', color, e.target.checked)
              }
            />
            {color}
          </label>
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
          <label key={format} style={{ display: 'block', margin: '0.5rem 0' }}>
            <input
              type="checkbox"
              value={format}
              checked={formatFilter.includes(format)}
              onChange={e =>
                handleCheckboxChange('format', format, e.target.checked)
              }
            />
            {format}
          </label>
        ))}
      </div>
      <div>
        <CatalogSortTitle>Вартість</CatalogSortTitle>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceFilter}
          onChange={e => setPriceFilter(Number(e.target.value))}
        />
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
          <label key={flower} style={{ display: 'block', margin: '0.5rem 0' }}>
            <input
              type="checkbox"
              value={flower}
              checked={typeFilter.includes(flower)} // Проверка, выбрана ли опция
              onChange={e => handleCheckboxChange(flower, e.target.checked)}
            />
            {flower}
          </label>
        ))}
      </div>
      <CatalogSortButton onClick={handleResetFilters}>
        Скинути фільтр
      </CatalogSortButton>
    </CatalogSort>
  );
};

export default Filteres;
