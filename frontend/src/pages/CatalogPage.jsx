import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { selectFlowers } from '../redux/slices/cardsSlice';
import {
  selectColorFilter,
  selectColorShadeFilter,
  selectFormatFilter,
  selectPriceFilter,
  selectTypeFilter,
} from '../redux/slices/filterSlice';
import Breadcrumbs from '../components/BreadcrumbsContainer';
import Container from '../styles/Container';
import SideBar from '../components/Sidebar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import ProductsCatalog from '../components/ProductsCatalog';
import Filteres from '../features/Filteres';

// MAIN STYLES

const CatalogBlock = styled.div`
  position: relative;
  background-image: url(images/catalog-top.png);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 100%;
  content: '';
  width: 100%;
  height: auto;
  padding-top: 10rem;

  &:after {
    position: absolute;
    background-image: url(images/catalog-bottom.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    width: 100%;
    height: 35rem;
    bottom: 0;
    z-index: -10;
  }
`;

// TITLE BLOCK

const CatalogTitleBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2rem 2rem 3rem 2rem;
  background-color: #0000004d;
  backdrop-filter: blur(2rem);
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

const CatalogTitle = styled.h1`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
`;

const CatalogTitleSpan = styled.span`
  font-size: 10rem;
  font-weight: 400;
  line-height: 12rem;
  letter-spacing: 0.02rem;
  font-family: 'Cormorant', serif;
  text-transform: uppercase;
  margin-left: 28%;
  margin-bottom: 2rem;
`;
const CatalogTitleBlockText = styled.p`
  width: 43rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  margin-left: 28%;
  margin-bottom: 6rem;
`;

// SORT BLOCK

const SortBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
`;

const SortBlockItem = styled.button`
  background-color: transparent;
  border: 0.5px solid ${({ theme }) => theme.colors.textColor};
  color: ${({ theme }) => theme.colors.textColor};
  border-radius: 4rem;
  padding: 1rem 1.5rem;
  cursor: pointer;

  &:hover,
  &:active {
    border: 0.5px solid ${({ theme }) => theme.colors.backgroundColor};
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
    transition: 0.3s ease;
  }
`;

const SortContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 25.7rem;
  margin-bottom: 2rem;
`;

const SortBy = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 1rem 2rem 1rem 2rem;
  width: 25.7rem;
  background-color: #00000033;
  border: none;
  border-radius: 1rem;
  backdrop-filter: blur(2rem);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`;

// CATALOG CONTAINER

const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: 25.5rem 1fr;
  gap: 3rem;
`;

const CatalogPage = () => {
  const [sortOption, setSortOption] = useState('default');
  const allFlowers = useSelector(selectFlowers);

  const typeFilter = useSelector(selectTypeFilter);
  const colorFilter = useSelector(selectColorFilter);
  const colorShadeFilter = useSelector(selectColorShadeFilter);
  const formatFilter = useSelector(selectFormatFilter);
  const priceFilter = useSelector(selectPriceFilter);

  const applyFilters = (allFlowers, filters, sortOption) => {
    let filtered = allFlowers.filter(item => {
      const matchesType = filters.flowerType.length
        ? filters.flowerType.includes(item.flowerType)
        : true;

      const matchesColor = filters.flowerColor.length
        ? filters.flowerColor.includes(item.flowerColor)
        : true;

      const matchesColorShade = filters.colorShade.length
        ? filters.colorShade.includes(item.colorShade)
        : true;

      const matchesFormat = filters.format.length
        ? filters.format.includes(item.format)
        : true;

      const matchesPrice =
        item.price >= filters.price[0] && item.price <= filters.price[1];

      return (
        matchesType &&
        matchesColor &&
        matchesColorShade &&
        matchesFormat &&
        matchesPrice
      );
    });

    switch (sortOption) {
      case 'isTop':
        filtered = filtered.filter(item => item.isTop === true);
        break;
      case 'rose':
        filtered = filtered.filter(item => item.flowerType === 'Троянди');
        break;
      case 'hydra':
        filtered = filtered.filter(item => item.flowerType === 'Гортензії');
        break;
      case 'peonies':
        filtered = filtered.filter(item => item.flowerType === 'Півонії');
        break;
      case 'chrysant':
        filtered = filtered.filter(item => item.flowerType === 'Хризантеми');
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredItems = useMemo(
    () =>
      applyFilters(
        allFlowers,
        {
          flowerType: typeFilter,
          flowerColor: colorFilter,
          colorShade: colorShadeFilter,
          format: formatFilter,
          price: priceFilter,
        },
        sortOption,
      ),
    [
      allFlowers,
      typeFilter,
      colorFilter,
      colorShadeFilter,
      formatFilter,
      priceFilter,
      sortOption,
    ],
  );

  return (
    <>
      <CatalogBlock>
        <Container>
          <Breadcrumbs />
          <CatalogTitleBlock>
            <CatalogTitle>
              Каталог <br />
              <CatalogTitleSpan>букетів</CatalogTitleSpan>
            </CatalogTitle>
            <CatalogTitleBlockText>
              У нашому магазині найбільший вибір букетів для будь-яких подій:
            </CatalogTitleBlockText>
            <SortBlock>
              <SortBlockItem onClick={() => setSortOption('hydra')}>
                Букет із гортензій
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('peonies')}>
                Букет із півоній
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('chrysant')}>
                Букет із хризантем
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Кімнатні квіти в горщиках
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Монобукети
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Збірні букети
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Букет на свято
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Композиції із квітів
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Конверти
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Листівки
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Подарунки
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Букети із сухоквітів
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Шари
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('isTop')}>
                Популярне
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('rose')}>
                Букети троянд
              </SortBlockItem>
              <SortBlockItem onClick={() => setSortOption('default')}>
                Упаковка подарунків
              </SortBlockItem>
            </SortBlock>
          </CatalogTitleBlock>
          <SideBar />
          <SortContainer>
            <div></div>
            <SortBy>
              <option value="popular">По популярності</option>
            </SortBy>
          </SortContainer>
          <CatalogContainer>
            <Filteres />
            <div>
              <ProductsCatalog flowers={filteredItems} />
            </div>
          </CatalogContainer>
        </Container>
      </CatalogBlock>

      <Footer />
    </>
  );
};

export default CatalogPage;
