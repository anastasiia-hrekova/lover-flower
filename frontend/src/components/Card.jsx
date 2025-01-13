import AddToCart from './AddToCart';
import styled from 'styled-components';

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
  shouldForwardProp: prop => prop !== 'onSale' && prop !== 'isMainPage',
})`
  display: ${({ onSale }) => (onSale ? 'block' : 'none')};
  position: absolute;
  right: ${({ isMainPage }) => (isMainPage ? '-1.8rem' : '2.5rem')};
  top: ${({ isMainPage }) => (isMainPage ? '-1rem' : '-1rem')};
  width: 6rem;
  height: 6rem;
  z-index: 3;
`;

const Card = ({ cardData, isMainPage }) => {
  const { image, title, price, onSale, oldPrice } = cardData;

  return (
    <CardStyle>
      <CardSticker
        src="/images/sale.png"
        onSale={onSale}
        isMainPage={isMainPage}
      ></CardSticker>
      <CardImg src={image} alt="flowers" />
      <CardTitle>{title}</CardTitle>
      <CardPrice>
        {price} UAH
        {onSale && oldPrice && <OldPrice> {oldPrice} UAH</OldPrice>}
      </CardPrice>
      <AddToCart />
    </CardStyle>
  );
};

export default Card;
