import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  selectFilteredFlowers,
  setSearchQuery,
} from '../redux/slices/cardsSlice';
import styled from 'styled-components';
import ButtonLink from '../components/ButtonLink';
import Container from '../styles/Container';
import Footer from '../components/Footer';
import ProductsCatalog from '../components/ProductsCatalog';
import { useEffect } from 'react';

const SearchTitle = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.5rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
  margin-bottom: 4rem;
`;

const SearchBlock = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $hasItems }) => ($hasItems ? 'auto' : '95rem')};

  &:before {
    width: 100%;
    height: 70rem;
    position: absolute;
    content: '';
    background-image: url(/images/search-top.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }
`;

const SearchContainer = styled.div`
  margin-top: 15rem;
`;

const NoCardsText = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
  width: 30rem;
  margin-bottom: 2rem;
`;

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.flowers.searchQuery);

  useEffect(() => {
    window.scrollTo(0, 0);

    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    if (query) {
      dispatch(setSearchQuery(query));
    }
  }, [location, dispatch]);

  const filteredFlowers = useSelector(selectFilteredFlowers);

  const handleNavigate = () => {
    navigate('/catalog');
  };

  return (
    <>
      <SearchBlock $hasItems={filteredFlowers.length > 0}>
        <Container>
          <SearchContainer>
            <SearchTitle>Результат пошуку: {searchQuery}</SearchTitle>
            {filteredFlowers.length > 0 ? (
              <ProductsCatalog flowers={filteredFlowers} isSearchPage={true} />
            ) : (
              <div>
                <NoCardsText>
                  За цим запитом нічого не знайдено. Спробуйте ще раз або
                  перейдіть до каталогу
                </NoCardsText>
                <ButtonLink text="В каталог" onNavigate={handleNavigate} />
              </div>
            )}
          </SearchContainer>
        </Container>
      </SearchBlock>
      <Footer />
    </>
  );
};

export default SearchPage;
