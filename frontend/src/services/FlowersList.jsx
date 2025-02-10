import { useQuery } from 'react-query';
import { fetchFlowersAPI } from './fetchFlowersAPI';

const FlowersList = () => {
  const { data, error, isLoading } = useQuery('flowers', fetchFlowersAPI);

  if (isLoading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>Сталася помилка при завантаженні даних</div>;
  }

  return (
    <div>
      <h1>Список квітів</h1>
      <ul>
        {data.map(flower => (
          <li key={flower.id}>{flower.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FlowersList;
