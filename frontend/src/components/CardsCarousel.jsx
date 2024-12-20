import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  fetchFlowers,
  selectTopFlowers,
  selectLoading,
  selectError,
} from '../redux/cardsSlice';
import Card from './Card';
// import { NextArrow, PrevArrow } from './CarouselButtons';

const CardsCarousel = () => {
  const dispatch = useDispatch();
  const topFlowers = useSelector(selectTopFlowers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchFlowers());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {topFlowers.map(card => (
        <SwiperSlide key={card.id}>
          <Card cardData={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardsCarousel;
