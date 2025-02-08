import { useState } from 'react';

const CarouselForProduct = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumnailClick = index => {
    setActiveIndex(index);
  };

  const nextImage = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex(
      prevIndex => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <div>
      <div>
        <img src={images[activeIndex].src} alt="flowers" />
      </div>
      <div>
        <button onClick={prevImage}>
          <img src="/images/arrow-for-product.png" alt="prev" />
        </button>
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt="flowers"
              onClick={() => handleThumnailClick(index)}
            />
          ))}
        </div>
        <button onClick={nextImage}>
          {' '}
          <img src="/images/arrow-for-product.png" alt="next" />
        </button>
      </div>
    </div>
  );
};

export default CarouselForProduct;
