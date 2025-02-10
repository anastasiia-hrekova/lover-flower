import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Container from '../styles/Container';
import { useEffect } from 'react';

const NotFoundPage = styled.div`
  background-image: url(/images/404-background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  content: '';
  width: 100%;
  height: 95rem;
  margin-top: 10rem;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 74rem;
  margin-left: 70%;
`;

const ErrorText = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
`;

const ToMainPage = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.1rem;
  letter-spacing: 0.04rem;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.mainColor};
  text-decoration: underline;
`;

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NotFoundPage>
        <Container>
          <TextBlock>
            <ErrorText>Помилка 404</ErrorText>
            <ErrorText>Упс...такої сторінки нема</ErrorText>
            <ToMainPage to="/">На головну</ToMainPage>
          </TextBlock>
        </Container>
      </NotFoundPage>
      <Footer />
    </>
  );
};

export default NotFound;
