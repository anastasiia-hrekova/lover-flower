import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlowers } from '../redux/slices/cardsSlice';
import { selectLoading, selectError } from '../redux/slices/cardsSlice';
import Card from '../components/Card';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const CatalogCards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 20rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr;
  }
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
  const [hasMore, setHasMore] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const loadFlowers = async () => {
      const result = await dispatch(fetchFlowers({ page, limit })).unwrap();
      if (result.length === 0) {
        setHasMore(false);
      }
    };
    if (hasMore) {
      loadFlowers();
    }
  }, [dispatch, page, limit, hasMore]);

  const scrollHandler = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isLoading &&
      !hasMore
    ) {
      setPage(prevPage => prevPage + 1);
      setLimit(prevLimit => prevLimit + 12);
    }

    if (window.scrollY > 550) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [isLoading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (isLoading && flowers.length === 0) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const isSearchPage = location.pathname.includes('search');
  const isCatalogPage = location.pathname.includes('catalog');

  return (
    <>
      <CatalogCards>
        {flowers.map(card => (
          <Card
            cardData={card}
            key={card.id}
            isCatalogPage={isCatalogPage}
            isSearchPage={isSearchPage}
          />
        ))}
      </CatalogCards>
      {!hasMore && <div></div>}
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
