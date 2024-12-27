import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SidebarCardImg = styled.img`
  transition: 0.4s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonToCart = () => {
  return (
    <NavLink to="cart">
      <SidebarCardImg src="images/cart.svg" alt="cart" />
    </NavLink>
  );
};

export default ButtonToCart;
