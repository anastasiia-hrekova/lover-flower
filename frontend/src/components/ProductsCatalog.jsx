import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlowers } from '../redux/cardsSlice';
import { selectFlowers, selectLoading, selectError } from '../redux/cardsSlice';
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/Card';
import styled from 'styled-components';

const CatalogCards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 20rem;
`;

const ProductsCatalog = () => {
  const dispatch = useDispatch();
  const flowers = useSelector(selectFlowers);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const limit = 11;

  useEffect(() => {
    dispatch(fetchFlowers({ page: 1, limit }));
  }, [dispatch, limit]);

  if (isLoading && flowers.length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <CatalogCards>
      {flowers.slice(0, limit).map(card => (
        <Card cardData={card} key={uuidv4()} />
      ))}
    </CatalogCards>
  );
};

export default ProductsCatalog;
