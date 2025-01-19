import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/slices/cartSlice';
import { useLocation } from 'react-router-dom';

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

const ProductPartCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const ProductQuantityBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 10rem;
  height: 3rem;
  border: 0.5px solid #555555;
  align-items: center;
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

const CheckoutText = styled.p`
  color: ${({ theme }) => theme.colors.mainColor};
  font-family: 'Oswald', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const isOpen = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const location = useLocation();

  const isCheckoutPage = location.pathname === '/checkout';

  if (!isOpen) return null;

  return (
    <CartBlock>
      {isCheckoutPage ? (
        <CheckoutText>Ваше замовлення: </CheckoutText>
      ) : (
        <CartTitle>Ваша корзина</CartTitle>
      )}
      <Line></Line>
      {cart.length === 0 ? (
        <ProductTitle>Корзина порожня</ProductTitle>
      ) : (
        <>
          {cart.items.map(item => (
            <>
              <ProductBlock key={item.id}>
                <ProductPartLeft>
                  <ProductImg src={item.image} alt="flower" />
                  <ProductPartCenter>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductQuantityBlock>
                      <QuantityBtn
                        onClick={() =>
                          dispatch(decrementQuantity({ id: item.id }))
                        }
                      >
                        -
                      </QuantityBtn>
                      <p>{item.quantity}</p>
                      <QuantityBtn
                        onClick={() =>
                          dispatch(incrementQuantity({ id: item.id }))
                        }
                      >
                        +
                      </QuantityBtn>
                    </ProductQuantityBlock>
                  </ProductPartCenter>
                </ProductPartLeft>
                <ProductPartRight>
                  <ProductPrice>{item.quantity * item.price} грн</ProductPrice>
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
