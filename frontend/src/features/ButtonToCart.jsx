import { useState } from 'react';
import styled from 'styled-components';
import Cart from './Cart';

const SidebarCardImg = styled.img`
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OpenCart = styled.div`
  position: absolute;
  width: 42rem;
  height: 100vh;
  background-color: #000;
  right: 0;
  top: 0;
  padding: 2rem 3rem;
  color: #fff;
  z-index: 5;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(/images/cart-back.png);
    background-repeat: no-repeat;
    right: -20%;
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

const ButtonToCart = () => {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <SidebarCardImg
        src="images/cart.svg"
        alt="cart"
        onClick={() => setCartOpen((cartOpen = !cartOpen))}
      />
      {cartOpen && (
        <OpenCart>
          <CloseCartBtn onClick={() => setCartOpen((cartOpen = !cartOpen))}>
            <img src="/images/closeX.png" alt="close" />
          </CloseCartBtn>
          <Cart />
        </OpenCart>
      )}
    </>
  );
};

export default ButtonToCart;
