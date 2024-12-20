import AddToCart from './AddToCart';

const Card = ({ filteredCards }) => {
  if (!filteredCards || filteredCards.length === 0) {
    return <h2>No products found</h2>;
  }

  return (
    <div className="cards-container">
      {filteredCards.map(card => (
        <div className="card" key={card.id}>
          <img className="card__img" src={card.image} alt="flowers" />
          <h4 className="card__title">{card.title}</h4>
          <p className="card__price">
            {card.price} UAH
            {card.onSale && card.oldPrice && (
              <span className="card__price-old"> {card.oldPrice} UAH</span>
            )}
          </p>
        </div>
      ))}
      <AddToCart />
    </div>
  );
};

export default Card;
