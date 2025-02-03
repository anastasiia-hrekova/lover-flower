import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BreadCrumbs from '../components/BreadcrumbsContainer';
import Footer from '../components/Footer';
import Container from '../styles/Container';
import { useSelector } from 'react-redux';
import { selectFlowers } from '../redux/slices/cardsSlice';

const ProductBlock = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10rem;

  &:before {
    width: 100%;
    height: 70rem;
    position: absolute;
    content: '';
    background-image: url(images/product-card-back.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }
`;

const ProductTitle = styled.h1`
  font-family: 'Cormorant', serif;
  font-size: 4rem;
  font-weight: 400;
  line-height: 4.9rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
`;

const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector(selectFlowers);
  const product = products.find(item => Number(item.id) === Number(id));

  return (
    <>
      <ProductBlock>
        <Container>
          <BreadCrumbs />
          {product ? (
            <>
              <img src={product.image} alt="flower" />
              <ProductTitle>{product.title}</ProductTitle>
            </>
          ) : (
            <h2>Товару не знайдено</h2>
          )}
        </Container>
      </ProductBlock>
      <Footer />
    </>
  );
};

export default ProductPage;
