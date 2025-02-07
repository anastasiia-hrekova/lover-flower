import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Cart from './Cart';

const CartBtn = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CountCardsDiv = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border: none;
  top: -25%;
  right: -35%;
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: #142b2b;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000033;
  backdrop-filter: blur(20px);
`;

const OpenCart = styled.div`
  position: fixed;
  width: 42rem;
  height: 100vh;
  background-color: #000;
  right: 0;
  top: 0;
  padding: 2rem 3rem;
  color: #fff;
  z-index: 5;
  overflow-y: auto;
  overflow-x: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    position: absolute;
    content: '';
    width: 35rem;
    height: 100vh;
    background-image: url(/images/cart-back.png);
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    z-index: 5;
  }
`;

const CloseCartBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  transform: translateY(25%);
  right: 3rem;
  z-index: 11;
`;

const TotalPrice = styled.p`
  color: ${({ theme }) => theme.colors.mainColor};
`;

const TotalBlock = styled.div`
  margin-top: 1rem;
`;

const CheckoutBtn = styled.button`
  position: relative;
  width: 100%;
  height: 5.5rem;
  background-color: transparent;
  border: 0.5px solid ${({ theme }) => theme.colors.textColor};
  text-align: center;
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 2rem;
  font-family: 'Oswald', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 11;
  transition: 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
    border: 0.5px solid ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.backgroundColor};
  }
`;

const ButtonToCart = () => {
  let [cartOpen, setCartOpen] = useState(false);
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setCartOpen(false);
    navigate('/checkout', { state: { cart } });
  };

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : 'auto';
  }, [cartOpen]);

  return (
    <>
      <CartBtn>
        <img
          src="/images/cart.svg"
          alt="cart"
          onClick={() => setCartOpen(!cartOpen)}
        />
        {cart.items.length > 0 && (
          <CountCardsDiv>
            <span>{cart.items.length}</span>
          </CountCardsDiv>
        )}
      </CartBtn>
      {cartOpen && (
        <Overlay>
          <OpenCart>
            <CloseCartBtn onClick={() => setCartOpen(!cartOpen)}>
              <img src="/images/closeX.png" alt="close" />
            </CloseCartBtn>
            <Cart />
            <TotalBlock>
              <TotalPrice>
                Попередній підсумок: {totalAmount.toFixed(2)} грн
              </TotalPrice>
              <p>
                Щоб дізнатися про вартість доставки, перейдіть до оформлення
                замовлення.
              </p>
              <CheckoutBtn onClick={handleCheckout}>
                Оформити замовлення
              </CheckoutBtn>
            </TotalBlock>
          </OpenCart>
        </Overlay>
      )}
    </>
  );
};

export default ButtonToCart;
