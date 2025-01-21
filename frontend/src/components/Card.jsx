import { useDispatch } from 'react-redux';
import AddToCart from './AddToCart';
import styled from 'styled-components';
import { addToCart } from '../redux/slices/cartSlice';

const CardStyle = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 0.04rem;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
`;

const CardImg = styled.img`
  width: 25.5rem;
  height: 33.5rem;
`;

const CardTitle = styled.h4`
  width: 25.5rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
`;

const CardPrice = styled.p`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.1rem;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #939393;
`;

const CardSticker = styled.img.withConfig({
  shouldForwardProp: prop =>
    prop !== 'onSale' && prop !== 'isNew' && prop !== 'isMainPage',
})`
  display: ${({ onSale, isNew }) => (onSale || isNew ? 'block' : 'none')};
  position: absolute;
  right: ${({ isMainPage }) => (isMainPage ? '-1.8rem' : '2.5rem')};
  top: ${({ isMainPage }) => (isMainPage ? '-1rem' : '-1rem')};
  width: 6rem;
  height: 6rem;
  z-index: 2;
`;

const Card = ({ cardData, isMainPage }) => {
  const { image, title, price, onSale, oldPrice, isNew } = cardData;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(cardData));
  };

  return (
    <CardStyle>
      <CardSticker
        src="images/sale.png"
        onSale={onSale}
        isMainPage={isMainPage}
      ></CardSticker>
      <CardSticker
        src="images/isNew.png"
        isNew={isNew}
        isMainPage={isMainPage}
      ></CardSticker>
      <CardImg src={image} alt="flowers" />
      <CardTitle>{title}</CardTitle>
      <CardPrice>
        {price} UAH
        {onSale && oldPrice && <OldPrice> {oldPrice} UAH</OldPrice>}
      </CardPrice>
      <AddToCart onClick={handleAddToCart} />
    </CardStyle>
  );
};

export default Card;
