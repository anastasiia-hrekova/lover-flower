import AddToCart from './AddToCart';

const Card = ({ title, image, price }) => {
  return (
    <div className="card">
      <img className="card__img" src={image} alt="flowers" />
      <h4 className="card__title">{title}</h4>
      <p className="card__price">
        {price} UAH <span className="card__price-old">{price} UAH</span>
      </p>
      <AddToCart />
    </div>
  );
};

export default Card;
