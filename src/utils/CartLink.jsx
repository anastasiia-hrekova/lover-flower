import { NavLink } from 'react-router-dom';

const CartLink = () => {
  return (
    <NavLink to="cart">
      <img className="sidebar__cart-img" src="images/cart.svg" alt="cart" />
    </NavLink>
  );
};

export default CartLink;
