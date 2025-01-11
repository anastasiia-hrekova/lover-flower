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

const Card = ({ cardData }) => {
  const { image, title, price, onSale, oldPrice } = cardData;

  return (
    <CardStyle>
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
