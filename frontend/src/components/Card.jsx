import AddToCart from './AddToCart';

const Card = ({ title, image, price, oldPrice, onSale }) => {
  return (
    <div className="card">
      <img className="card__img" src={image} alt="flowers" />
      <h4 className="card__title">{title}</h4>
      <p className="card__price">
        {price} UAH
        {onSale && oldPrice && (
          <span className="card__price-old"> {oldPrice} UAH</span>
        )}
      </p>
      <AddToCart />
    </div>
  );
};

export default Card;
