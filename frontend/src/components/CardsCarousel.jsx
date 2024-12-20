import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
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

  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <Slider {...settings}>
      <Card filteredCards={topFlowers} />
    </Slider>
  );
};

export default CardsCarousel;
