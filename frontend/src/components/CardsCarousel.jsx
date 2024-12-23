import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFlowers,
  selectTopFlowers,
  selectLoading,
  selectError,
} from '../redux/cardsSlice';
import Card from './Card';
import { NextArrow, PrevArrow } from './CarouselButtons';

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
      if (width < +600) {
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

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? topFlowers.lenght - 1 : prevIndex - cardsToShow,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === topFlowers.lenght - cardsToShow
        ? 0
        : prevIndex + cardsToShow,
    );
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + cardsToShow >= topFlowers.lenght;

  const currentCards = topFlowers.slice(
    currentIndex,
    currentIndex + cardsToShow,
  );

  return (
    <div className="container card-container">
      <PrevArrow onClick={handlePrev} disabled={isPrevDisabled} />
      <div className="card-block">
        {currentCards.map(card => (
          <Card cardData={card} key={card.id} />
        ))}
      </div>
      <NextArrow onClick={handleNext} disabled={isNextDisabled} />
    </div>
  );
};

export default CardsCarousel;
