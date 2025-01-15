import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlowers } from '../redux/slices/cardsSlice';
import { selectLoading, selectError } from '../redux/slices/cardsSlice';
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

const ScrollToTopBtn = styled.button`
  border: none;
  cursor: pointer;
  width: 10rem;
  height: 10rem;
  position: fixed;
  bottom: 2rem;
  right: 7%;
  z-index: 3;
  background-color: #00000033;
  backdrop-filter: blur(20px);
  border-radius: 50%;
  display: ${({ $show }) => ($show ? 'block' : 'none')};
`;

const ProductsCatalog = ({ flowers }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    dispatch(fetchFlowers({ page, limit }));
  }, [dispatch, page, limit]);

  const scrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isLoading
    ) {
      setPage(prevPage => prevPage + 1);
      setLimit(prevLimit => prevLimit + 12);
    }

    if (window.scrollY > 550) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [isLoading]);

  if (isLoading && flowers.length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <CatalogCards>
        {flowers.slice(0, limit).map(card => (
          <Card cardData={card} key={uuidv4()} />
        ))}
      </CatalogCards>
      <ScrollToTopBtn $show={showBtn} onClick={scrollToTop}>
        <svg
          width="6"
          height="40"
          viewBox="0 0 6 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 0L0.113249 5H5.88675L3 0ZM3.5 40L3.5 4.5H2.5L2.5 40H3.5Z"
            fill="#43FFD2"
          />
        </svg>
      </ScrollToTopBtn>
    </>
  );
};

export default ProductsCatalog;
