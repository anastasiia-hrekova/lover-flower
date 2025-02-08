import { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainImage = styled.img`
  width: 35rem;
  height: 45rem;
  object-fit: cover;
  margin-right: 2rem;
`;

const Thumbnails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 3rem;
`;

const Thumbnail = styled.img`
  width: 16rem;
  height: 18.5rem;
  object-fit: cover;
  cursor: pointer;
  opacity: 0.6;

  &:active {
    opacity: 1;
  }
`;

const Prev = styled.button`
  background: transparent;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
  margin-right: 2rem;
`;

const Next = styled.button`
  background: transparent;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  margin-top: 1rem;
  transform: rotate(180deg);
  margin-right: 2rem;
`;

const CarouselForProduct = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const nextThumbnails = () => {
    setVisibleIndex(prevIndex => Math.min(prevIndex + 1, images.length - 2));
  };

  const prevThumbnails = () => {
    setVisibleIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleThumnailClick = index => {
    setActiveIndex(index);
  };

  return (
    <CarouselContainer>
      <Thumbnails>
        <Prev onClick={prevThumbnails}>
          <img src="/images/arrow-for-product.png" alt="prev" />
        </Prev>
        <ThumbnailImages>
          {images.slice(visibleIndex, visibleIndex + 2).map((image, index) => (
            <Thumbnail
              key={index}
              src={image.src}
              alt="flowers"
              onClick={() => handleThumnailClick(visibleIndex + index)}
            />
          ))}
        </ThumbnailImages>
        <Next onClick={nextThumbnails}>
          {' '}
          <img src="/images/arrow-for-product.png" alt="next" />
        </Next>
      </Thumbnails>
      <div>
        <MainImage src={images[activeIndex].src} alt="flowers" />
      </div>
    </CarouselContainer>
  );
};

export default CarouselForProduct;
