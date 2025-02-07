import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFlowers } from '../redux/slices/cardsSlice';
import styled from 'styled-components';
import {
  incrementQuantity,
  decrementQuantity,
} from '../redux/slices/cartSlice';
import BreadCrumbs from '../components/BreadcrumbsContainer';
import Footer from '../components/Footer';
import Container from '../styles/Container';
import AddToCart from '../components/AddToCart';
import CardsCarousel from '../components/CardsCarousel';

const ProductBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 10rem;

  &:before {
    width: 100%;
    height: 70rem;
    position: absolute;
    content: '';
    background-image: url(/images/product-card-back.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: -1;
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

const FlowerInfoBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-bottom: 8rem;
`;

const BlockImg = styled.img`
  width: 35rem;
  height: 45rem;
`;

const ProductQuantityBlock = styled.div`
  ${({ theme }) => theme.mixins.flex};
  flex-direction: row;
  width: 10rem;
  height: 3rem;
  border: 0.5px solid #555555;
  justify-content: space-around;
  color: #555555;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
`;

const QuantityBtn = styled.button`
  color: #555555;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector(selectFlowers);
  const product = products.find(item => Number(item.id) === Number(id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <ProductBlock>
        <Container>
          <BreadCrumbs />
          {product ? (
            <>
              <FlowerInfoBlock>
                <div></div>
                <div>
                  <BlockImg src={product.image} alt="flower" />
                </div>
                <div>
                  <button onClick={() => navigate(-1)}>Назад</button>
                  <ProductTitle>{product.title}</ProductTitle>
                  <p>
                    {product.price} <span>{product.oldPrice}</span>
                  </p>
                  <p>{product.description}</p>
                  <div>
                    <AddToCart />
                    <ProductQuantityBlock>
                      <QuantityBtn
                        onClick={() =>
                          dispatch(decrementQuantity({ id: product.id }))
                        }
                      >
                        -
                      </QuantityBtn>
                      <p>{product.quantity}</p>
                      <QuantityBtn
                        onClick={() =>
                          dispatch(incrementQuantity({ id: product.id }))
                        }
                      >
                        +
                      </QuantityBtn>
                    </ProductQuantityBlock>
                  </div>
                </div>
              </FlowerInfoBlock>
              <div>
                <h3>Додатково до замовлення:</h3>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div>
                <div>
                  <button></button>
                  <button></button>
                </div>
                <ul>
                  <p></p>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <ul>
                  <p></p>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                <p></p>
                <p></p>
              </div>
              <CardsCarousel />
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
