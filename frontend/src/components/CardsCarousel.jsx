import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFlowers,
  selectTopFlowers,
  selectLoading,
  selectError,
} from '../redux/slices/cardsSlice';
import Container from '../styles/Container';
import { CardContainer } from '../styles/CardContainer';
import Card from './Card';
import { NextArrow, PrevArrow } from './CarouselButtons';
import styled from 'styled-components';

const CardBlock = styled.div`
  ${({ theme }) => theme.mixins.flex};
  flex-direction: row;
  gap: 3rem;
`;

const CardsCarousel = () => {
  const dispatch = useDispatch();
  const topFlowers = useSelector(selectTopFlowers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;

      if (width < 500) {
        setCardsToShow(1);
      } else if (width <= 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);

    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (!topFlowers || topFlowers.length === 0) {
    return <h1>No flowers available</h1>;
  }

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? topFlowers.length - 1 : prevIndex - cardsToShow,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === topFlowers.length - cardsToShow
        ? 0
        : prevIndex + cardsToShow,
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + cardsToShow >= topFlowers.length;

  const currentCards = topFlowers.slice(
    currentIndex,
    currentIndex + cardsToShow,
  );

  return (
    <Container>
      <CardContainer>
        <PrevArrow onClick={handlePrev} disabled={isPrevDisabled} />
        <CardBlock>
          {currentCards.map(card => (
            <Card cardData={card} key={card.id} isMainPage={true} />
          ))}
        </CardBlock>
        <NextArrow onClick={handleNext} disabled={isNextDisabled} />
      </CardContainer>
    </Container>
  );
};

export default CardsCarousel;
