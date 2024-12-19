import { useEffect, useState } from 'react';
import Card from '../components/Card';

const API_URL = './data/flowers.json';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const cards = await res.json();
        setCards(cards);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        cards.map(card => {
          return <Card {...card} key={card.id} />;
        })
      )}
    </div>
  );
};

export default Cards;
