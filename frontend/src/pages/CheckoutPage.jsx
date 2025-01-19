import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../styles/Container';
import Cart from '../features/Cart';

const ProductsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 35rem;
  margin-top: 10rem;
  color: ${({ theme }) => theme.colors.textColor};
`;

const TotalPrice = styled.p`
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
`;

const CheckoutPage = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: { items: [] } };

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Container>
        <ProductsBlock>
          <Cart />
          <TotalPrice>
            Попередній підсумок: {totalAmount.toFixed(2)} грн{' '}
          </TotalPrice>
        </ProductsBlock>
      </Container>
    </>
  );
};

export default CheckoutPage;
