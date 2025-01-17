import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/cartSlice';

const CartBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  z-index: 10;
`;

const CartTitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.5rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #555555;
`;

const ProductBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductPartLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const ProductPartRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textColor};
`;

const ProductImg = styled.img`
  width: 6rem;
  height: 8rem;
`;

const ProductPrice = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
`;

const DeleteBtn = styled.button`
  width: 3.9rem;
  height: 1.5rem;
  border: none;
  background-color: transparent;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
`;

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <CartBlock>
      <CartTitle>Ваша корзина</CartTitle>
      <Line></Line>
      {cartItems.length === 0 ? (
        <ProductTitle>Корзина пуста</ProductTitle>
      ) : (
        <>
          {cartItems.map(item => (
            <>
              <ProductBlock key={item.id}>
                <ProductPartLeft>
                  <ProductImg src={item.image} alt="flower" />
                  <div>
                    <ProductTitle>{item.title}</ProductTitle>
                    <p>{item.quantity}</p>
                  </div>
                </ProductPartLeft>
                <ProductPartRight>
                  <ProductPrice>{item.price} грн</ProductPrice>
                  <DeleteBtn onClick={() => dispatch(removeFromCart(item.id))}>
                    Видалити
                  </DeleteBtn>
                </ProductPartRight>
              </ProductBlock>
              <Line></Line>
            </>
          ))}
        </>
      )}
    </CartBlock>
  );
};

export default Cart;
