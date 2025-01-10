import Breadcrumbs from '../components/BreadcrumbsContainer';
import Container from '../styles/Container';
import SideBar from '../components/Sidebar';
import Footer from '../components/Footer';
import styled from 'styled-components';
import ProductsCatalog from '../components/ProductsCatalog';

const CatalogBlock = styled.div`
  position: relative;
  background-image: url(/images/catalog-top.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  width: 100%;
  height: auto;
  padding-top: 10rem;

  &:after {
    position: absolute;
    background-image: url(/images/catalog-bottom.png);
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

const SortBlock = styled.ul`
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

const SortBlockItem = styled.li`
  background-color: transparent;
  border: 0.5px solid ${({ theme }) => theme.colors.textColor};
  border-radius: 4rem;
  padding: 1rem 1.5rem;
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

const CatalogContainer = styled.div`
  display: grid;
  grid-template-columns: 25.5rem 1fr;
  gap: 3rem;
`;

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

  &:hover {
    border: none;
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
    transition: 0.4s ease;
  }
`;

const CatalogPage = () => {
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
              <SortBlockItem>Букет із гіпсофіл</SortBlockItem>
              <SortBlockItem>Букет із ромашок</SortBlockItem>
              <SortBlockItem>Букет із хризантем</SortBlockItem>
              <SortBlockItem>Кімнатні квіти в горщиках</SortBlockItem>
              <SortBlockItem>Монобукети</SortBlockItem>
              <SortBlockItem>Збірні букети</SortBlockItem>
              <SortBlockItem>Букет на свято</SortBlockItem>
              <SortBlockItem>Композиції із квітів</SortBlockItem>
              <SortBlockItem>Конверти</SortBlockItem>
              <SortBlockItem>Листівки</SortBlockItem>
              <SortBlockItem>Подарунки</SortBlockItem>
              <SortBlockItem>Букети із сухоквітів</SortBlockItem>
              <SortBlockItem>Шари</SortBlockItem>
              <SortBlockItem>Популярне</SortBlockItem>
              <SortBlockItem>Букети троянд</SortBlockItem>
              <SortBlockItem>Упаковка подарунків</SortBlockItem>
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
            <CatalogSort>
              <div>
                <CatalogSortTitle>За відтінком</CatalogSortTitle>
              </div>
              <div>
                <CatalogSortTitle>За кольором</CatalogSortTitle>
              </div>
              <div>
                <CatalogSortTitle>За форматом</CatalogSortTitle>
              </div>
              <div>
                <CatalogSortTitle>Вартість</CatalogSortTitle>
              </div>
              <div>
                <CatalogSortTitle>За квіткою</CatalogSortTitle>
              </div>
              <CatalogSortButton>Скинути фільтр</CatalogSortButton>
            </CatalogSort>
            <div>
              <ProductsCatalog />
            </div>
          </CatalogContainer>
        </Container>
      </CatalogBlock>

      <Footer />
    </>
  );
};

export default CatalogPage;
